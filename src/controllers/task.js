const { StatusCodes } = require("http-status-codes");
const { newTask, fetchATask, updateATask, deleteTask, fetchAllTask } = require("../services/task");

const createNewTask = catchAsync(async (req, res) => {
    const task = await newTask(req.body, req.user)
    res.status(StatusCodes.CREATED).json({
        status: true,
        msg: 'new task successfully created!',
        task,
    })
})

const getATask = catchAsync(async (req, res) => {
    const taskId = req.params.id
    const task = await fetchATask(taskId, req.user)
    res.status(StatusCodes.OK).json({
        status: true,
        msg: 'task retrieved successfully!',
        task,
    })
})

const editATask = catchAsync(async (req, res) => {
    const taskId = req.params.id
    const task = await updateATask(taskId, req.user, req.body)
    res.status(StatusCodes.OK).json({
        status: true,
        msg: 'task updated successfully!',
        task,
    })
})

const deleteATask = catchAsync(async (req, res) => {
    const taskId = req.params.id
    await deleteTask(taskId, req.user)
    res.status(StatusCodes.NO_CONTENT).json({
        status: true,
        msg: 'task deleted successfully!',
    })
})

const getAllTasks = catchAsync(async (req, res) => {
    const tasks = await fetchAllTask(req.user)
    res.status(StatusCodes.OK).json({
        status: true,
        msg: 'tasks retrieved successfully!',
        data: {
            count: tasks.length,
            tasks,
        },
    })
})

module.exports = { createNewTask, getAllTasks, deleteATask, editATask,getATask }