const { default: mongoose } = require('mongoose');
const { jobModel } = require ('./jobSchema');

const getAllJob = async (req,res,next) => {
    const data = await jobModel.find({},);

    res.set({'Content-type':'application/json'});
    res.status(200).send(data);
}

const getJobById = async (req,res,next) => {
    const data = await jobModel.findOne({_id:req._id});
    res.set({'Content-type':'application/json'});
    res.status(200).send(data);
}

const addJob = async (req, res) => {
    let material = req.body.materials;
    material = material.map(item=>{return{...item, idMaterial: new mongoose.Types.ObjectId(item.idMaterial)}});
    req.body.materials = material;
    const newJob = new jobModel(req.body);
    const data = await newJob.save();
    res.status(200).send(data);
}

const updateJob = async (req, res) => {
    const data = await jobModel.findOneAndUpdate({_id:req._id}, req.body);
    res.status(200).send(data);
}

const removeJob = async (req, res) => {
    const data = await jobModel.findOneAndRemove({_id:req._id});
    res.status(200).send(data);
}

module.exports = {getAllJob, getJobById, addJob, updateJob, removeJob}