const express = require("express");

const errorGlobalHandler = require('./src/errors/errorHandler')
const unknownEndpoint = require('./src/middlewares/unknownEndpoint')
const { userRouter } = require('./src/routes/user')
const CONFIG = require("./config/config");
require("./config/db")(CONFIG.DBURL);
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', userRouter)
app.use('*', unknownEndpoint);
app.use(errorGlobalHandler);
module.exports = { app };
