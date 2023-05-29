const { mongoose } = require ('../../database/connection.js');

const schema = {
    ci: String,
    name : String,
    phone : String,
    email : String,
    status: {type: Boolean, default:true},}

const clientExternalSchema = new mongoose.Schema(schema,{timestamps:true, versionKey:false});

const clientExternalModel = mongoose.model('clientExternal', clientExternalSchema);

module.exports = {clientExternalModel}