const { saveTask, getATask, editATask, getAllTasks, deleteATask } = require('../repositories/task')


const newTask = async(newTaskObject, owner) => {
    const newTask = await saveTask({ ...newTaskObject, owner })
    return newTask;
}

const fetchATask = async(taskId, ownerId) => {
    const task = await getATask(taskId, ownerId);
    return task
}

const updateATask = async(taskId, ownerId, newTaskObject) => {
    const task = await editATask(taskId, ownerId, newTaskObject)
    return task;
}

const fetchAllTask = async(ownerId) => {
    const tasks = await getAllTasks(ownerId);
    return tasks
}

const deleteTask = async(taskId, ownerId) => {
    await deleteATask(taskId, ownerId);
    return;
}
module.exports = { newTask, fetchATask, updateATask, fetchAllTask, deleteTask }