const mongoose = require("mongoose")
const userschema = mongoose.model("project2user", new mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
        minlength: 2,
        required: true
    }
}))
module.exports = {userschema}