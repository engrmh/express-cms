const express = require('express');
const userController = require('./../../controllers/v1/user')

const userRouter = express.Router()

// userRouter.route('/ban/:id').post(userController.banUser)
userRouter.post('/ban/:id' , userController.banUser)

module.exports = userRouter