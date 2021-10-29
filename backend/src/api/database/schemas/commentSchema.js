const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    body: { type: String, required: true},
    todoId: { type: mongoose.Types.ObjectId, required: true},
    userId: { type: mongoose.Types.ObjectId, required: true}
}, {
    timestamps: true
})

module.exports = mongoose.model('Comment', commentSchema);