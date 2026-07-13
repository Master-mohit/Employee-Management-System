const router = require('express').Router();
const GetDeprt = require('../controllers/departmentController');

router.post('/departments', GetDeprt.createDepartment);





module.exports = router;