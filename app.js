const express = require('express');

//const { sequelize } = require("./utils/database");
const { usersRouter } = require('./routers/users.router');

//Initializind the sercer
const app = express();

app.use(express.json());

//EndPoints
app.use('/api/v1/users', usersRouter);

module.exports = { app };
