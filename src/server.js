const express = require ('express');
const bodyParser = require('body-parser');
const { employeeRoute } = require ('./features/employee/employeeRoute.js');
const { clientInternalRoute } = require('./features/clientInternal/clientInternalRoute.js');
const { jobRoute } = require('./features/job/jobRoute.js');
const { loginRoute } = require('./features/login/loginRoute.js');
const { orderExternalRoute } = require('./features/orderExternal/orderExternalRoute.js');
const { materialRoute } = require('./features/material/materialRoute.js');
const { clientExternalRoute } = require('./features/clientExternal/clientExternalRoute');
const { orderInternalRoute } = require('./features/orderInternal.js/orderInternalRoute.js');


const app = express();

app.listen(3000,()=>{console.log("servidor corriendo en el puerto 3000 y con docker")});

app.use((req,res,next)=>{
    res.set("Access-Control-AlloW-Origin","*");
    res.set("Access-Control-AlloW-Headers","*");
    res.set("Access-Control-AlloW-Methods","*");
    next();
})

app.use((req, res, next)=>{
    console.log("Request detected");
    next();
})

app.use(bodyParser.json());

app.use('/api/material', materialRoute);
app.use('/api/employee', employeeRoute);
app.use('/api/clientInternal', clientInternalRoute);
app.use('/api/clientExternal', clientExternalRoute);
app.use('/api/job', jobRoute);
app.use('/api/login', loginRoute);
app.use('/api/orderExternal', orderExternalRoute);
app.use('/api/orderInternal', orderInternalRoute);