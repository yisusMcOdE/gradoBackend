const { mongoose } = require ('../../database/connection.js');
const schema = {
    idClient : { type: mongoose.Types.ObjectId, ref: 'clients' },
    institution : String,
    deliveredDate : Date,
    cost : Number,
    status: {type: Boolean, default:true},
    statusDelivered : {type: Boolean, default:false},
}

const orderInternalSchema = new mongoose.Schema(schema,{timestamps:true, versionKey:false});

const orderInternalModel = mongoose.model('orderInternal', orderInternalSchema);

module.exports = {orderInternalModel};