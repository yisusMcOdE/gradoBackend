const { orderMaterialModel } = require('./orderMaterialSchema');
const { orderMaterialDetailModel } = require ('./orderMaterialDetailSchema');
const { mongoose } = require ('../../database/connection.js');

const sendResponse = async(res, data) => {
    res.set ({'Content-type':'application/json'})
    res.status(200).send(data);
}

const getAllOrderMaterials = async(req, res, next) => {
    const response = await orderMaterialModel.aggregate([
        {
            $lookup:{
                from :'ordermaterialdetails', 
                localField:'_id', 
                foreignField:'idOrderMaterial', 
                as:'details'
            }
        }
    ]);
    const jsonresponse = JSON.stringify(response);
    sendResponse(res, jsonresponse);
    console.log(response);
}

const addOrderMaterials = async (req,res,next) => {
    const responseOrder = await orderMaterialModel.create({status:true});


    const idOrder = responseOrder._id;
    let details = req.body.details;
    details = details.map(item => {
        return {
            ...item, 
            idOrderMaterial: new mongoose.Types.ObjectId(idOrder),
            idMaterial: new mongoose.Types.ObjectId(item.idMaterial),
            deliveredQuantity: 0
        }
    });
    const responseDetails = await orderMaterialDetailModel.create(details);
    res.status(200).send(responseOrder);
}

module.exports = {getAllOrderMaterials, addOrderMaterials}
