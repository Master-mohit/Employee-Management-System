const router = require('express').Router();
const GetDeprt = require('../controllers/departmentController');
const getAllDept = require('../controllers/departmentController');
const getById = require('../controllers/departmentController');
const updateById = require('../controllers/departmentController');


router.post('/departments', GetDeprt.createDepartment);


router.get('/GetAllDept', getAllDept.GetAllDept)


router.get('/GetById/:id', getById.GetById);


router.put('/UpdateById/:id', updateById.UpdateDept)






module.exports = router;