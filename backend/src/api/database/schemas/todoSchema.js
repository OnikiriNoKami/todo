const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: {type: String, default: ""},
    userId: {type: mongoose.Types.ObjectId, required: true},
    statusId: {type: mongoose.Types.ObjectId},
    beginDate: Date,
    endDate: Date,

}, {
    timestamps: true
})

module.exports = mongoose.model('Todo', todoSchema);