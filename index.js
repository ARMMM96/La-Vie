require("dotenv").config()
const app = require('./app/app')
const colors = require('colors');
app.listen(process.env.PORT, ()=> console.log(`http://localhost:${process.env.PORT}`.green.underline))