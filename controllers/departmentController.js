const departmentModel = require('../models/departmentmodel');
const employeeModel = require('../models/employeemodel');

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


const GetAllDept = async(req, res) => {
    try{
     const Getalldepartments =  await departmentModel.find();
        res.status(201).json({
            message: "Get All Departments Successfully",
            data: Getalldepartments
        })
    }
    catch(error){
            res.status(500).json({
            message: "Error to Getting Departments",
            data: error.message
        })
    }
}

const GetById = async(req, res) => {
    try{
    const getbyid = await departmentModel.findById(req.params.id);
        res.status(201).json({
            message: "Get Departments By Id Successfully",
            data: getbyid
        })
    }
    catch(error){
           res.status(500).json({
            message: "Error to Getting Departments by ID",
            data: error.message
        })
    }
}

const UpdateDept = async(req, res) => {
    try{
     const updateDept = await departmentModel.findByIdAndUpdate(req.params.id, req.body, {new : true})
       res.status(201).json({
            message: "Updated Successfully",
            data: updateDept
        })
    }
    catch(error){
             res.status(500).json({
            message: "Error to Updated Departments by ID",
            data: error.message
        })
    }
}

const DeptWiseEmp = async(req, res) => {
    try{
        const deptWiseEm = await employeeModel.find({department: req.params.id})
         res.status(201).json({
            message: "Succesfully Fetch EmployeeDepartment wise",
            data: deptWiseEm
        })
    }
    catch(error){
          res.status(500).json({
            message: "Error to Get Departments wise Employees",
            data: error.message
        })
    }
}



module.exports = {
    createDepartment,
    GetAllDept,
    GetById,
    UpdateDept,
    DeptWiseEmp
}