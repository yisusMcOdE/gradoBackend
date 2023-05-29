const { mongoose } = require ('../../database/connection.js');

const schema = {
    idOrderMaterial : { type: mongoose.Types.ObjectId, ref: 'orderMaterial' },
    idMaterial : { type: mongoose.Types.ObjectId, ref: 'material' },
    requiredQuantity : Number,
    deliveredQuantity : Number
}

const orderMaterialDetailSchema = new mongoose.Schema(schema,{timestamps:true});

const orderMaterialDetailModel = mongoose.model('orderMaterialDetail', orderMaterialDetailSchema);

module.exports = {orderMaterialDetailModel};