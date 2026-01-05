const Person = require('../models/Person');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


const createPerson = async (req, res) => {
  const { name, email, details } = req.body;
  try {
    // Check if user exists
    let user = await Person.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // Create person
    user = new Person({ name, email, details });
    await user.save();
    res.status(201).json({success:true, user});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get All Persons (with totals)
const getAllPersons = async (req, res) => {
  try {
    const persons = await Person.find().sort({ name: 1 });
    res.json(persons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { createPerson, getAllPersons };