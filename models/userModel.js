const mongoose = require('mongoose');




const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    profession: {
        type: String,
        trim: true
    }
});



const User = mongoose.model('User', userSchema);

module.exports = User;