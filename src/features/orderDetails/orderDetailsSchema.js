const { mongoose } = require ('../../database/connection.js');

const schema = {
    idOrder : mongoose.Types.ObjectId,
    idJob : mongoose.Types.ObjectId,
    job:String,
    detail:String,
    requiredQuantity : Number,
    cost: Number,
    deliveredQuantity : {type: Number, default:0},
    status: {type: Boolean, default:true},
}

const orderDetailsSchema = new mongoose.Schema(schema,{timestamps:true, versionKey:false});

const orderDetailsModel = mongoose.model('orderDetail', orderDetailsSchema);

module.exports = {orderDetailsModel};