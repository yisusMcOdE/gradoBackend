const { mongoose } = require ('../../database/connection.js');
const express = require ('express');
const { getAllOrderMaterials, addOrderMaterials } = require ('./orderMaterialMiddleware.js');

const orderMaterialsRoute = express.Router();

orderMaterialsRoute.param('id', (req,res,next,value) => {
    req._id = new mongoose.Types.ObjectId(value);
    next();
})

orderMaterialsRoute.get('', getAllOrderMaterials);

orderMaterialsRoute.post('', addOrderMaterials);


module.exports = {orderMaterialsRoute}