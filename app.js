const express = require("express");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan') 

const errorGlobalHandler = require('./src/errors/errorHandler')
const unknownEndpoint = require('./src/middlewares/unknownEndpoint')
const { userRouter } = require('./src/routes/user')
const { taskRouter } = require("./src/routes/task");
const CONFIG = require('./config/config')
require("./config/db")(CONFIG.DBURL);
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())

app.use('/api/v1/auth', userRouter)
app.use('/api/v1/task', taskRouter)
app.use('*', unknownEndpoint);
app.use(errorGlobalHandler);
module.exports = { app };
