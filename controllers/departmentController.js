const departmentModel = require('../models/departmentmodel');

const createDepartment = async(req, res) => {
    try{
      const newDepartment = new departmentModel(req.body);
      await newDepartment.save();
        res.status(201).json({
            message: "Department created successfully",
            data: newDepartment
        })
    }
    catch(error){
       res.status(500).json({
           message: "Error creating department",
           error: error.message
       })
    }
}




module.exports = {
    createDepartment
}