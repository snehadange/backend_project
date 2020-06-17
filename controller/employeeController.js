const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
let Employee = require('../models/employeeModel');


/*router.get('/',(req,res)=>{
    res.json('sample text')
    
})*/

router.route('/add').post((req, res) => {
    const _id =new mongoose.Types.ObjectId();
    const name = req.body.name;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const city = req.body.city;

    const newEmployee = new Employee({
        _id,
        name,
        email,
        mobile,
        city,
    });

    newEmployee.save()
     // .then((employees) => res.json({
       //   message:'Employee added!',
         // data:employees}))
         .then(()=>console.log("______________",newEmployee))
        .then(() => res.json(newEmployee))

        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
    Employee.find()
        .then(employees => res.json({
            message:"Get all Data successfully",
            count:employees.length,
            data:employees}))
        .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/:id').get((req, res) => {
    Employee.findById(req.params.id)
        .then(employees => res.json(employees))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res) => {
    Employee.findByIdAndDelete(req.params.id)
        .then(() => res.json('Employee deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').put((req, res) => {
    Employee.findById(req.params.id)
        .then(employees => {
             employees.name= req.body.name;
             employees.email = req.body.email;
             employees.mobile = req.body.mobile;
             employees.city = req.body.city;


             employees.save()
                .then(() => res.json(
                    {message:'employees updated!'}))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router