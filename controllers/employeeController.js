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

        const employees = await employee.find(
     //      {

     //      salary: {
     //           $gte: 8000
     //      },
     //      age :{
     //           $gte: 21
     //      }
     //    }, "name email"
     )
            res.status(200).json({
               message: "Employees retrieved successfully",
               data: employees
            })

} 
// ............... this one for projection , query operator, pagination 

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

const SortingEmployee = async(req, res) => {
     try{
          const Sortemployee = await employee.find().sort({
               salary: -1
          }).limit(1);
          res.status(200).json({
               message: "Employees sorted successfully",
               data: Sortemployee
          })
     }
     catch(error){
          res.status(500).json({
               message: "Error in Sorting",
               data : error.message
          })
     }
}

const Pagination = async(req, res) => {

      const page = Number(req.query.page)|| 1;
      const limit = Number(req.query.limit)|| 1;

      const skip = (page - 1) * limit;

     try{
           const pageEmp = await employee.find().sort({
               salary : 1
           }).skip(skip).limit(limit);
            res.status(200).json({
               message: "Employees paginated successfully",
               data: pageEmp  
          })
     }
    
    catch(error){
          res.status(500).json({
               message: "Error in Pagination",
               data : error.message
          })
     }
}

const Aggregation = async(req, res) => {
     try{
         const aggemp = await employee.aggregate([
          {
               $group: {
                    _id: "$department",
                    totalemployees: {$sum : 1},
                    totalsalary: {$sum: "$salary"},
                    averagesalary: {$avg: "$salary"}
               },
          }
         ])
         res.status(200).json({
          message : "Employees aggregated successfully",
          data : aggemp
         })

     }
     catch(error){
          res.status(500).json({
               message: "Error in Aggregation",
               data : error.message
          })
     }
}

const GetALLEMPLOYEEE = async(req, res) => {
      try{
          const GETEMPLOYEEE = await employee.find().populate('department');
          res.status(200).json({
            message: "All employees retrieved successfully",
            data: GETEMPLOYEEE
          })
      }
      catch(error){
        res.status(500).json({
          message: "Error in getting all employees",
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
     SearchEmployees,
     SortingEmployee,
     Pagination,
     Aggregation,
     GetALLEMPLOYEEE
      
}

