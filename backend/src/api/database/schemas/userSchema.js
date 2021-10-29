const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:String,
    phone: String,
    nickName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    todos: [mongoose.Types.ObjectId],
    token: String,
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);