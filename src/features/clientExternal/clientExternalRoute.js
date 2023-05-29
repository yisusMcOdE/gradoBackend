const { mongoose } = require ('../../database/connection.js');
const express = require ('express');
const { getAllClientExternal, getClientExternalById, addClientExternal, updateClientExternal, removeClientExternal } = require('./clientExternalMiddleware.js');


const clientExternalRoute = express.Router();

clientExternalRoute.param('id', (req,res,next,value) => {
    req._id = new mongoose.Types.ObjectId(value);
    next();
})

clientExternalRoute.get('', getAllClientExternal);

clientExternalRoute.get('/:id', getClientExternalById);

clientExternalRoute.post('', addClientExternal);

clientExternalRoute.put('/:id',updateClientExternal);

clientExternalRoute.delete('/:id', removeClientExternal);

module.exports = {clientExternalRoute}