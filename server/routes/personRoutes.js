const express = require('express');
const { createPerson, getAllPersons } = require('../controllers/personController');

const router = express.Router();
//person routes
router.post('/create', createPerson);
router.get('/getAll', getAllPersons);

module.exports = router;