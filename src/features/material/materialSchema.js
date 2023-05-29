const {mongoose} = require ('../../database/connection.js');

const schema = {
    name: String,
    brand: String,
    unit: String,
    stock: Number,
    over: Number,
    status: Boolean
}

const materialSchema = new mongoose.Schema(schema,{timestamps:true, versionKey:false});

const materialModel = mongoose.model('material', materialSchema);

module.exports = {materialModel};