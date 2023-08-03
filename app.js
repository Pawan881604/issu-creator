const express = require('express');
const dotenv = require('dotenv');
const Path = require('path');
const dbConnect = require('./config/db');

const app = express()
dotenv.config({ path: "./config/config.env" })
// call database
dbConnect()

app.use(express.static(Path.join(__dirname, './public')))
app.set('view engine', 'ejs');
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// all router call
const homeRoute = require('./rouets/homeRoute');
const projectRoute = require('./rouets/productRoute');
const exp = require('constants');
app.use('/', homeRoute)
app.use('/project', projectRoute)


module.exports = app;