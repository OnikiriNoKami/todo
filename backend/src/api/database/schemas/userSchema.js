const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {type: String, unique: true},
    phone:  {type: String, unique: true},
    nickName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    todos: [mongoose.Types.ObjectId],
    token:  {type: String, default: ''},
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);