const { materialModel } = require("./materialSchema");

const sendResponse = async(res, data) => {
    res.set ({'Content-type':'application/json'})
    res.status(200).send(data);
}

const getAllMaterial = async(req, res, next) => {
    const response = await materialModel.find({});
    const jsonresponse = JSON.stringify(response);
    sendResponse(res, jsonresponse);
}
const getMaterialById = async (req,res,next) => {
    const response = await materialModel.findById({"_id":req.id});
    sendResponse(res, response);
}
const addMaterial = async (req,res,next) => {
    const newMaterial = new materialModel (req.body);
    const response = await newMaterial.save();
    sendResponse(res, response);
}
const updateMaterial = async (req, res) => {
    console.log(req._id);
    console.log(req.body);
    const data = await materialModel.findOneAndUpdate({_id:req.id}, req.body);
    res.status(200).send(data);
}

module.exports = {getAllMaterial, getMaterialById, addMaterial, updateMaterial};