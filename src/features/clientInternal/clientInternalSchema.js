const { mongoose } = require ('../../database/connection.js');

const schema = {
    user : String,
    password : String,
    email : String,
    institution : String,
    phone : String,
    role : String,
    address : String,
    status: {type: Boolean, default:true},}

const clientSchema = new mongoose.Schema(schema,{timestamps:true, versionKey:false});

const clientInternalModel = mongoose.model('clientInternal', clientSchema);

module.exports = {clientInternalModel};