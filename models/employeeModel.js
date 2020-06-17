const mongoose = require('mongoose');




const employeeSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
    },
    mobile:{
        type: Number,
        required: true,
        trim: true,
    },
    city:{
        type: String,
        required: true,
        trim: true, 
    }
});



 const Employee=mongoose.model('Employee', employeeSchema);
 
 module.exports=Employee;