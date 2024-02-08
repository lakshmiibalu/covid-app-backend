const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
const patientRoute = require("./controller/patientRoute")

//middleware
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Lakshmi:ZEPH26YR@cluster0.gs9xdes.mongodb.net/covidDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

//routing

app.use("/api/patient",patientRoute)

app.listen(3001,()=>{
    console.log("Server Running")
})