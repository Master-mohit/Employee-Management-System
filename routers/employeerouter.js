const router = require('express').Router();
const employeeController = require('../controllers/employeeController');
const GetAllEmployees = require('../controllers/employeeController');
const updatedEmployee = require('../controllers/employeeController');
const GetById = require('../controllers/employeeController');
const deleteEmplyee = require('../controllers/employeeController');
const searchEmployees = require('../controllers/employeeController');
const SorEmp = require('../controllers/employeeController');
const Pagination = require('../controllers/employeeController');
const Aggregation = require('../controllers/employeeController')

router.post('/create', employeeController.createEmployee);

router.get('/GetAllEmployees', employeeController.getAllEmployees);

router.get('/GetEmployeeById/:id', GetById.GetemployeeById);

router.put('/updated/:id', updatedEmployee.UpdateEmployee);

router.delete('/delete/:id', deleteEmplyee.DeleteEmployee);

router.get('/search', searchEmployees.SearchEmployees);

router.get('/sort', SorEmp.SortingEmployee);

router.get('/pagiEmpl', Pagination.Pagination);

router.get('/aggemp', Aggregation.Aggregation);

module.exports = router;