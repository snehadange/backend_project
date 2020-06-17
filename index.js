require('./models/db')
require('dotenv').config()
const express =require('express');
const bodyParser=require('body-parser')
const employeeController=require('./controller/employeeController')
const userController=require('./controller/userController')


const app=express();
const PORT=8000
app.use(bodyParser.json())



app.use('/employee',employeeController)
app.use('/user',userController)




module.exports=app;

