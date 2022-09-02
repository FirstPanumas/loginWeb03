const express = require('express')
const router = express.Router()

const { findUser, createUser } = require('../controller/userController')

router.get('/user',findUser)
router.post('/user',createUser)

module.exports = router