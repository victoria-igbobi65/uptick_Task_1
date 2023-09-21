const express = require('express')

const { createNewTask, getAllTasks, getATask, editATask, deleteATask } = require('../controllers/task')
const { newTaskDto, updateTaskDto } = require('../validators/task')
const { validateUser } = require('../middlewares/authenticate')
const taskRouter = express.Router()

taskRouter
    .route('/')
    .post(newTaskDto, validateUser, createNewTask)
    .get(validateUser, getAllTasks)

taskRouter
    .route('/:id')
    .get(validateUser, getATask)
    .patch(updateTaskDto, validateUser, editATask)
    .delete(validateUser, deleteATask)


module.exports = { taskRouter }
