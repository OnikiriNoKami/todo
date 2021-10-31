const User = require("../schemas/userSchema");
const Todo = require("../schemas/todoSchema");

const userController = {
    create: async ({
        nickName = "",
        password = "",
        email = "",
        token = "",
        phone = "",
    }) => {
        try {
            const user = new User({ nickName, email, token, phone, password });
            await user.save();
            return user;
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    },
    findAndAddTodo: async ({_id, todoId, userTodos}) => {
        try{
            const result = await User.findById(_id)
            if(!result.todos.some((objectId)=>objectId.toString()===todoId)){
                result.todos.push(todoId)
                await result.save()
            }
            if(userTodos && result!==null){
                result.userTodos = await Todo.find({ userId: result._id });
            }
            return result
        } catch (error){
            console.log(error.message)
            return error
        }
    },
    findAndRemoveTodo: async({userId, todoId, userTodos}) => {
        try {
            const result = await User.findById(userId)
            const todoIndex = result.todos.findIndex((objectId)=>objectId.toString()===todoId)
            if(todoIndex !== -1){
                result.todos = result.todos.splice(todoIndex, 1);
                await result.save()
            }
            if(userTodos && result!==null){
                result.userTodos = await Todo.find({ userId: result._id });
            }
            return result
        } catch (error){
            console.log(error.message)
            return error
        }
    },

    getAll: async () => {
        try {
            const result = await User.find();
            return result || null;
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    },
    getAllWithTodos: async () => {
        try {
            const result = await User.aggregate([
                {
                    $lookup: {
                        from: "todos",
                        localField: "_id",
                        foreignField: "userId",
                        as: "userTodos",
                    },
                },
            ]);
            return result || null;
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    },

    getById: async (_id, withTodos=false) => {
        try {
            const result = await User.findById(_id);
            if(withTodos){
                result.userTodos = await Todo.find({ userId: _id });
            }
            return result || null;
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    },

    getByNickName: async (nickName, withTodos) => {
        try {
            const result = await User.findOne({ nickName });
            if(withTodos && result!==null){
                result.userTodos = await Todo.find({ userId: result._id });
            }
            return result || null;
        } catch (error) {
            console.log(error.messge);
            return error.message;
        }
    },
    fidnOneAndRemove: async (_id) => {
        try {
            const result = await User.findByIdAndRemove(_id);
            return result;
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    },
};

module.exports = userController;
