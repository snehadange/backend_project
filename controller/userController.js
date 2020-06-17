const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
let User = require('../models/userModel');

router.route('/adduser').post(async(req, res,next) => {
    res.setHeader('Content-Type', 'application/json');
    const _id =new mongoose.Types.ObjectId();
    const employee = req.body.employeeId;
    const profession = req.body.profession;
   

    const newUser = new User({
        _id,
         employee,
        profession
    });

   newUser.save()
 
    .then((users) => 
     res.json({
         message:'User added!',
            data:users})) 
        .then(() => res.setHeader('Content-Type', 'application/json'))
      //  .then(() =>  res.json(newUser))

         .catch(err => res.status(200).json('Error: ' + err));     
    });


router.route('/').get((req, res) => {
    User.find()
        .populate('employee','name')
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router