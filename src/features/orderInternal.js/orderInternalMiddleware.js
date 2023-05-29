const { mongoose } = require ('../../database/connection.js');
const { clientInternalModel } = require('../clientInternal/clientInternalSchema.js');
const { jobModel } = require('../job/jobSchema.js');
const { orderDetailsModel } = require('../orderDetails/orderDetailsSchema.js');
const { orderInternalModel } = require('./orderInternalSchema.js');

const sendResponse = async(res, data) => {
    res.set ({'Content-type':'application/json'})
    res.status(200).send(data);
}

const getOrderInternalList = async(req,res,next) => {
    const response = await orderInternalModel.find({});
    const jsonresponse = JSON.stringify(response);
    sendResponse(res, jsonresponse);
    console.log(response);
}

const getAllOrderInternal = async(req, res, next) => {
    const response = await orderInternalModel.aggregate([
        {
            $lookup:{
                from :'orderdetails', 
                localField:'_id', 
                foreignField:'idOrder',
                as:'details'
            }
        },
        {
            $unwind: '$details'
        },
        {
            $lookup: {
                from: 'jobs',
                localField: 'details.idJob',
                foreignField: '_id',
                as: 'details.job'
            }
        },
        {
            $unwind: '$details.job'
        },
        {
            $group: {
              _id: '$_id',
              status: { $first: '$status' },
              idClient: { $first: '$idClient'},
              date:{ $first: '$date'},
              cost:{ $first: '$cost'},
              statusDelivered:{ $first: '$statusDelivered'},
              details: { $push: '$details' }
            }
          }
    ]);
    const jsonresponse = JSON.stringify(response);
    sendResponse(res, jsonresponse);
    console.log(response);
}

const addOrderInternal = async (req,res,next) => {
    const idClient = await clientInternalModel.findOne({institution:req.body.institution},'_id');
    req.body.idClient = idClient._id;
    const responseOrder = await orderInternalModel.create(req.body);
    const idOrder = responseOrder._id;
    let details = req.body.details;
    const promises = await details.map(async(item)=> {
        const idJob = await jobModel.findOne({name:item.job},'_id');
        const final = {
            ...item, 
            idOrder:new mongoose.Types.ObjectId(idOrder),
            idJob:idJob._id
        }
        return final
    });
    const resolverDetails = await Promise.all(promises);
    const responseDetails = await orderDetailsModel.create(resolverDetails);
    res.status(200).send(responseOrder); 
    
}

module.exports = {getAllOrderInternal, getOrderInternalList, addOrderInternal}