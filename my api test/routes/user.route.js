const express = require('express');
const router = express.Router();
const { getusers, deleteuser, modifyuser, getuser, adduser } = require('../controllers/user.controller');
const validateObjectId = require('../middlewares/validateObjectId'); // Assuming you add this middleware

router.post('/post', adduser);
router.get('/all', getusers);
router.get('/:id', validateObjectId, getuser);
router.put('/:id', validateObjectId, modifyuser);
router.delete('/:id', validateObjectId, deleteuser);

module.exports = router;
