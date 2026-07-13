const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, 'Name must be at least 3 characters Long'],
        maxlength: [50, 'Name cant be exceed 50 characters Long'],
        trim: true,
        lowercase: true,
    },
     email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
     },
     age : {
        type: Number,
        required: true,
        min: [18, 'age must be at least 18'],
        max: [65, 'age cant be exceed 65'],
     },
     salary: {
        type: Number,
        required: true,
         min : [8000, 'Salary must be at least 8000'],
        max: [100000, 'Salary cant be exceed 100000'],
     },
     department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
     },
     joiningDate: {
        type: Date,
        default: Date.now
     }
})

module.exports = mongoose.model('Employee', employeeSchema);