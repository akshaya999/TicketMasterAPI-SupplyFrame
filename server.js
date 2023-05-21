// imports 
require('dotenv').config()

const express = require('express')
const session = require('express-session')

var cors = require('cors')

const app = express()
app.use(cors())

const PORT = process.env.PORT || 4000;


const path = require('path');
const mime = require('mime');

app.use(express.static(path.join(__dirname, 'static')));


app.use("/",require("./routes/contactRoutes.js"))

app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`)
})
