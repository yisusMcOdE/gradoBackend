const { clientInternalModel } = require ('./clientInternalSchema');

const getAllClient = async(req, res, next) => {
    let data = await clientInternalModel.find({});
    res.set ({'Content-type':'application/json'});
    res.status(200).send(data);
}

const getClientById = async (req, res) => {
    const data = await clientInternalModel.findOne({_id:req._id});
    if(data!==null){
        res.set ({'Content-type':'application/json'});
        res.status(200).send(data);
    }else{
        res.status(404).send({});
    }
    
}

const addClient = async (req, res) => {
    const newClient = new clientInternalModel(req.body);
    const data = await newClient.save();
    res.status(200).send(data);
}

const updateClient = async (req, res) => {
    const data = await clientInternalModel.findOneAndUpdate({_id:req._id}, req.body);
    res.status(200).send(data);
}

const removeClient = async (req, res) => {
    const data = await clientInternalModel.findOneAndRemove({_id:req._id});
    res.status(200).send(data);
}

module.exports = {getAllClient, getClientById, addClient, updateClient, removeClient}