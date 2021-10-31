const Todo = require("../schemas/todoSchema");
const User = require("../schemas/userSchema");
const { findAndAddTodo } = require("./userController");

const todoController = {
    create: async ({
        title = "Default title",
        description = "",
        userId = "",
        statusId = "",
        beginDate = "",
        endDate = "",
        withTodos,
    }) => {
        try{
            const todo = new Todo({title, description, userId, statusId, beginDate, endDate});
            await todo.save()
            await findAndAddTodo({_id: userId, todoId: todo._id, withTodos})

            return todo

        } catch (error){
            console.log(error.message)
            return error
        }
    },

    getAllTodos: async () => {
        try {
            const result = await Todo.find()
            return result
        } catch (error){
            console.log(error.message)
            return error
        }
    },

    getAllTodosWithUser: async () => {
        try {
            const result = await Todo.aggregate([
                {
                    $lookup: {
                        from: 'users',
                        localField: 'userId',
                        foreignField: '_id',
                        as: 'user'
                      },
                },
            ]);
            return result || null;

        } catch (error){
            console.log(error.message)
            return error
        }
    },

    getTodoById: async (_id, withUser)=> {
        try{
            const result = await Todo.findById(_id);
            if(withUser){
                result.user = await User.findById(result.userId);
            }
            return result
        } catch (error){
            console.log(error.message)
            return error
        }
    },
    delete: async (_id, withUser)=> {
        try {
            const result = await Todo.findByIdAndRemove(_id);
            if(withUser){
                result.user = await User.findById(result.userId);
            }
            return result
        } catch(error){
            console.log(error.message)
            return error
        }
    }
};

module.exports = todoController;