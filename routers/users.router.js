const express = require('express')

const { getAllUsers, createUser, getUserById } = require('../controllers/users.controller')

const router = express.Router() 

router.get('/', getAllUsers)
router.post('/', createUser)
router.get('/:id', getUserById)

module.exports = {usersRouter: router}
