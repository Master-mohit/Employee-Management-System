const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    manager: {
        type: String,
        required: true
    },

    floor: {
        type: Number,
        required: true,
        min: [1, 'Floor must be at least 1']
    }
})

module.exports = mongoose.model('Department', departmentSchema);