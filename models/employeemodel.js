const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
     email: {
        type: String,
        required: true,
        unique: true
     },
     age : {
        type: Number,
        required: true
     },
     salary: {
        type: Number,
        required: true
     },
     department: {
        type: String,
        required: true,
        

     },
     joiningDate: {
        type: Date,
        default: Date.now
     }
})

module.exports = mongoose.model('Employee', employeeSchema);