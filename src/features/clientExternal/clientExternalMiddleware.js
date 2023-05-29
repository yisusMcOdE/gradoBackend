const { clientExternalModel } = require('./clientExternalSchema');

const getAllClientExternal = async(req, res, next) => {
    let data = await clientExternalModel.find({});
    res.set ({'Content-type':'application/json'});
    res.status(200).send(data);
}

const getClientExternalById = async (req, res) => {
    const data = await clientExternalModel.findOne({_id:req._id});
    if(data!==null){
        res.set ({'Content-type':'application/json'});
        res.status(200).send(data);
    }else{
        res.status(404).send({});
    }
    
}

const addClientExternal = async (req, res) => {
    const newClient = new clientExternalModel(req.body);
    const data = await newClient.save();
    res.status(200).send(data);
}

const updateClientExternal = async (req, res) => {
    const data = await clientExternalModel.findOneAndUpdate({_id:req._id}, req.body);
    res.status(200).send(data);
}

const removeClientExternal = async (req, res) => {
    const data = await clientExternalModel.findOneAndRemove({_id:req._id});
    res.status(200).send(data);
}

module.exports = {getAllClientExternal, getClientExternalById, addClientExternal, updateClientExternal, removeClientExternal}