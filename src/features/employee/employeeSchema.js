const {mongoose} = require('../../database/connection.js');

const schema = {
    user: String,
    password: String,
    email: String,
    name: String,
    phone: String,
    role: String,
    status: Boolean
}

const employeeSchema = new mongoose.Schema (schema,{timestamps:true, versionKey:false});

const employeeModel = mongoose.model('employee', employeeSchema);

module.exports = {employeeModel}