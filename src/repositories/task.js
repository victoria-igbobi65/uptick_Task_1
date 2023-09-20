const { StatusCodes } = require('http-status-codes')
const { AppError } = require('../errors/AppError')
const { taskModel } = require('../models/task')

const saveTask = async (newTaskObject) => {
    const task = await taskModel.create(newTaskObject)
    return task
}

const getATask = async (taskId, ownerId) => {
    const task = await taskModel.findOne({ _id: taskId, owner: ownerId })
    return task
}

const getAllTasks = async (ownerId) => {
    return await taskModel.find({ owner: ownerId })
}

const deleteATask = async (taskId, ownerId) => {
    const task = await taskModel.findOneAndDelete({
        _id: taskId,
        owner: ownerId,
    })
    if (!task)
        throw new AppError(
            `task with id: ${taskId} not found`,
            StatusCodes.NOT_FOUND
        )
}

const editATask = async (taskId, taskObject) => {
    return await taskModel.findByIdAndUpdate(
        taskId,
        { $set: taskObject },
        { new: true, runValidators: true }
    )
}

moduke.exports = { saveTask, getATask, getAllTasks, editATask, deleteATask }
