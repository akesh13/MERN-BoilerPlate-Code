const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: {
        type:String,
        requried:true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    }
},{
    collection: "users",
    timestamps: true
});

module.exports = mongoose.model("User", User);

