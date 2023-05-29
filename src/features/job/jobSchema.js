
const { mongoose } = require ('../../database/connection.js');

const schema = {
	name : String,
	description: String,
	cost : [
		{
			lot : Number,
			price : Number,
			status : Boolean
		}
	],
	materials : [
		{	
			idMaterial: mongoose.Types.ObjectId,
			name : String, 
			required : Number,
			produced : Number,
			status : Boolean
		}
	],
	status:Boolean
}

const jobSchema = new mongoose.Schema(schema,{timestamps:true, versionKey:false});

const jobModel = mongoose.model('job', jobSchema);

module.exports = { jobModel };