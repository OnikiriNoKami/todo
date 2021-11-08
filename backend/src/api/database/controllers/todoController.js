const ComposePagination = require("../../utils/database/ComposePagination");
const Todo = require("../schemas/todoSchema");
const User = require("../schemas/userSchema");
const userController = require("./userController");
const { findAndAddTodo } = require("./userController");

const todoController = {
    create: async ({
        title = "Default title",
        description = "",
        userId = "",
        statusId = null,
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

    // getTodosByUserId: async (_id, withUser) => {
    //     try{
    //         const result  = await Todo.find({userId: _id});
    //         if(withUser){
    //             result.user = await User.findById(_id);
    //         }
    //         return result;
    //     } catch(error){
    //         console.log(error.message);
    //         return error
    //     }
    // },
    getTodosByUserId: async ({_id, pagination={limit:25, page:1}}, withUser) => {
        try{
            const totalCount = await Todo.countDocuments({userId: _id});
            const limit = parseInt(pagination.limit, 10);
            const page = parseInt(pagination.page, 10);
            if (totalCount === 0) return [];
            const result  = await Todo.find({userId: _id}).limit(limit).skip(limit * (page-1));
            result.pagination = ComposePagination({limit, page, totalCount});
            if(withUser){
                result.user = await User.findById(_id);
            }
            return result;
        } catch(error){
            console.log(error.message);
            return error
        }
    },
    delete: async (_id, withUser)=> {
        try {
            const result = await Todo.findByIdAndRemove(_id);
            if(result){
                const removeFromUser = await userController.findAndRemoveTodo({userId: result.userId, todoId: result._id })
            }
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