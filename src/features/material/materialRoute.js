const express = require('express');
const { getAllMaterial, getMaterialById, addMaterial, updateMaterial } = require ('./materialMiddleware.js');
const { mongoose } = require ('../../database/connection');
const { orderMaterialsRoute } = require ('../orderMaterial/orderMaterialsRoute');

const materialRoute = express.Router();

materialRoute.param('id',(req,res,next,value)=>{
    req.id = new mongoose.Types.ObjectId(value);
    next();
})
materialRoute.use('/order', orderMaterialsRoute);

///-----------------ROUTES-----------------///

materialRoute.get('/', getAllMaterial);
materialRoute.get('/:id', getMaterialById);
materialRoute.post('/', addMaterial);
materialRoute.put('/:id',updateMaterial);





module.exports = {materialRoute};

