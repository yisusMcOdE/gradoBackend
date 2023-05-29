const { mongoose } = require ('../../database/connection.js');

const schema = {
    idClient : {type: mongoose.Types.ObjectId, ref: 'clients' },
    name : String,
    date : Date,
    cost : Number,
    status: {type: Boolean, default:true},
    statusDelivered : {type: Boolean, default:false},
    payStatus : {type: Boolean, default:false},
}

const orderExternalSchema = new mongoose.Schema(schema,{timestamps:true, versionKey:false});

const orderExternalModel = mongoose.model('orderExternal', orderExternalSchema);

module.exports = {orderExternalModel};