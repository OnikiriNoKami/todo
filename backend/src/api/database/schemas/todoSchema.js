const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true},
    descriotion: String,
    userId: {type: mongoose.Types.ObjectId, required: true},
    statusId: {type: mongoose.Types.ObjectId, required: true},
    beginDate: Date,
    endDate: Date,

}, {
    timestamps: true
})

module.exports = mongoose.model('Todo', todoSchema);