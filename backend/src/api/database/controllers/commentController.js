const mongoose = require("mongoose");
const Comment = require("../schemas/commentSchema");
const Todo = require("../schemas/todoSchema");
const { getTodoById } = require("./todoController");

const commentController = {
    create: async ({ todoId, userId, body, todo, user }) => {
        try {
            const comment = new Comment({ todoId, userId, body });
            await comment.save();
            if (todo) {
                const result = await getTodoById(todoId, user);
                comment.todo = result;
            }
            return comment;
        } catch (error) {
            console.log(error.message);
            return error;
        }
    },
    getAllComments: async () => {
        try {
            const result = await Comment.find();
            return result;
        } catch (error) {
            console.log(error.message);
            return error;
        }
    },
    getAllCommentsWithTodos: async (user) => {
        try {
            if (user) {
                const result = await Comment.aggregate([
                    {
                        $lookup: {
                            from: "todos",
                            localField: "todoId",
                            foreignField: "_id",
                            as: "todo",
                        },
                    },
                    {
                        $unwind: "$todo",
                    },
                    {
                        $lookup: {
                            from: "users",
                            localField: "todo.userId",
                            foreignField: "_id",
                            as: "todo.user",
                        },
                    },
                    {
                        $unwind: "$todo.user"
                    }
                ]);
                return result;
            }
            const result = await Comment.aggregate([
                {
                    $lookup: {
                        from: "todos",
                        localField: "todoId",
                        foreignField: "_id",
                        as: "todo",
                    },
                },
                { $unwind: "$todo" },
            ]);

            return result;
        } catch (error) {
            console.log(error.message);
            return error;
        }
    },
    getAllTodosComments: async (todoId, user) => {
        try {
            if (user) {
                const result = await Comment.aggregate([
                    {
                        $match: {
                            "todoId": mongoose.Types.ObjectId(todoId)
                        }
                    },
                    {
                        $lookup: {
                            from: "todos",
                            localField: "todoId",
                            foreignField: "_id",
                            as: "todo",
                        },
                    },
                    {
                        $unwind: "$todo",
                    },
                    {
                        $lookup: {
                            from: "users",
                            localField: "todo.userId",
                            foreignField: "_id",
                            as: "todo.user",
                        },
                    },
                    {
                        $unwind: "$todo.user"
                    }
                ]);
                return result;
            }
            const result = await Comment.aggregate([
                {
                    $match: {
                        "todoId": mongoose.Types.ObjectId(todoId)
                    }
                },
                {
                    $lookup: {
                        from: "todos",
                        localField: "todoId",
                        foreignField: "_id",
                        as: "todo",
                    },
                },
                { $unwind: "$todo" },
            ]);

            return result;
        } catch (error) {
            console.log(error.message);
            return error;
        }
    }
};

module.exports = commentController;
