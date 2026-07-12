const employee = require('../models/employeemodel');

const createEmployee = async(req, res) => {
    try{
         const newEmployee = new employee(req.body);
              await newEmployee.save();

         res.status(201).json({
            message: "Employee created successfully",
            data: newEmployee
         })
    }
    catch(error){
         res.status(500).json({
            message: "Error creating employee",
            error: error.message
         })
    }
}

const getAllEmployees = async(req, res) => {


     const page = Number(req.query.page)|| 1;
     const limit = Number(req.query.limit)||1;

       const skip = (page - 1) * limit;

        const employees = await employee.find({

          // salary: {
          //      $gte: 8000
          // },
          // department: {
          //      $in: ['IT', 'HR']
          // },
          // age :{
          //      $gte: 23
          // }
        }, "name email").skip(skip).limit(limit);
            res.status(200).json({
               message: "Employees retrieved successfully",
               data: employees
            })

}

const GetemployeeById = async(req, res)=> {
    try{
     const GetEmployee=  await employee.findById(req.params.id);
     res.status(200).json({
          message: "Employee retrieved successfully",
          data: GetEmployee
     })
    }
   catch(error){
     res.status(500).json({
          message: "Error retrieving employee",
          data: error.message
     })
   }
}

const UpdateEmployee = async(req, res) => {

          try{
     const updatedEmployee = await employee.findByIdAndUpdate(req.params.id, req.body, {new: true});
     res.status(200).json({
          message: "Employee updated successfully",
          data : updatedEmployee
     })
          }
          catch(error){
      res.status(500).json({
      message: "Error updating employee",
     error: error.message
})          }
}

const DeleteEmployee = async(req, res) => {
     try{
          const deleteEmployee = await employee.findByIdAndDelete(req.params.id);
     res.status(200).json({
          message: "Employee deleted successfully",
          data: deleteEmployee
     })
     }
     catch(error){
          res.status(500).json({
               message: "Error deleting employee",
               error: error.message
          })
     }
}

const SearchEmployees = async(req, res) => {
     try{
         const searchEmpl = await employee.find({
            name: {
                $regex: req.query.name,
                $options: 'i'
            }
         })
         res.status(200).json({
              message: "Employees searched successfully",
              data: searchEmpl
         })
     }
     catch(error){
          res.status(500).json({
               message: "Error searching employees",
               data : error.message
          })
     }
}


module.exports = {
    createEmployee,
    getAllEmployees,
    GetemployeeById ,
     UpdateEmployee,
     DeleteEmployee,
     SearchEmployees

}

