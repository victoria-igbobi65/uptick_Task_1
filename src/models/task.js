const mongoose = require('mongoose')
const schema = mongoose.Schema

const taskSchema = new schema({
    title: {
        type: String,
        required: [true, 'Task title is required!'],

    },
    description: {
        type: String,
    },
    priority: {
        type: String,
        enum: ["high", "low", "mid"],
        default: "low"
    },
    status: {
        type: String,
        enum: ["completed", "in_progress"]
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
}, { timestamps: true })



const taskModel = mongoose.model('task', taskSchema)
module.exports = { taskModel }
