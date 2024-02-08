const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema(
    {
        name:String,
        phnno:String,
        address:String,
        symptoms:String,
        status:String
    }
)

module.exports = mongoose.model("patients",patientSchema)