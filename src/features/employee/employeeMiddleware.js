const { employeeModel } = require ('./employeeSchema');
const jwt = require('jsonwebtoken');

const getCredentialsEmployee = async (req,res,next) => {
    if(true){
        const user = req.body.user;
        const password = req.body.password
        const data = await employeeModel.findOne({user, password}, '_id user name role');
        res.set ({'Content-type':'application/json'});
        if(data!==null){
            var token = jwt.sign({data}, 'shhhhh');
            res.status(200).send(JSON.stringify({token}));
        }else
        res.status(200).send(data);
    }
}

const getAllEmployee = async(req, res, next) => {
    const data = await employeeModel.find({});
   
    console.log(data);
    res.set ({'Content-type':'application/json'});
    res.status(200).send(data);
}

const getEmployeeById = async (req, res) => {
    const data = await employeeModel.findOne({_id:req._id});
    res.set ({'Content-type':'application/json'});
    res.status(200).send(data);
}

const addEmployee = async (req, res) => {
    const newEmployee = new employeeModel(req.body);

    const data = await newEmployee.save();
    res.status(200).send(data);
}

const updateEmployee = async (req, res) => {
    const data = await employeeModel.findOneAndUpdate({_id:req._id}, req.body);
    res.status(200).send(data);
}

const removeEmployee = async (req, res) => {
    const data = await employeeModel.findOneAndRemove({_id:req._id});
    res.status(200).send(data);
}

module.exports = {getCredentialsEmployee, getAllEmployee, getEmployeeById, addEmployee, updateEmployee, removeEmployee}