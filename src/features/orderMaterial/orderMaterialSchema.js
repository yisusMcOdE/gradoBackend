const { mongoose } = require ('../../database/connection.js');

const schema = {
    status:Boolean
}

const orderMaterialSchema = new mongoose.Schema(schema,{timestamps:true, versionKey:false});

const orderMaterialModel = mongoose.model('orderMaterial', orderMaterialSchema);

module.exports = {orderMaterialModel};