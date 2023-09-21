const joi = require('@hapi/joi')

const enumPriority = ['high', 'mid', 'low']
const enumStatus = ['completed', 'in_progress', 'undone']

const validateBody = (schema) => {
    return (req, res, next) => {
        const result = schema.validate(req.body)

        if (result.error) {
            return res.status(400).json({ message: result.error.message })
        }

        next()
    }
}

/* Registration Validator */
const newTaskSchema = joi.object().keys({
    title: joi
        .string()
        .trim()
        .required()
        .error(new Error('Provide task title!')),
    description: joi
        .string()
        .trim()
        .error(new Error('Password must not be less than 8 characters!')),
    priority: joi
        .string()
        .valid(...enumPriority),
    status: joi
        .string()
        .valid(...enumStatus)
})
/* Registration Validator */
const updateTaskSchema = joi.object().keys({
    priority: joi
        .string()
        .valid(...enumPriority),
    status: joi
        .string()
        .valid(...enumStatus)
})

const newTaskDto = validateBody(newTaskSchema)
const updateTaskDto = validateBody(updateTaskSchema)

module.exports = {
    newTaskDto,
    updateTaskDto
}
