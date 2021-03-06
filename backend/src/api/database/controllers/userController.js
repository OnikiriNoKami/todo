require('dotenv').config()
const User = require("../schemas/userSchema");
const Todo = require("../schemas/todoSchema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userController = {
    create: async ({
        nickName = "",
        password = "",
        email = null,
        phone = null,
    }) => {
        try {
            const creationData = {nickName, email, phone}
            creationData.password = await bcrypt.hash(password, 4);
            creationData.token = jwt.sign({nickName}, process.env.JWT_KEY, {expiresIn: '2d'})
            if(email === '' || email == null){
                delete creationData.email
            }
            if(phone === '' || phone == null){
                delete creationData.phone
            }
            const user = new User(creationData);
            await user.save();
            return user;
        } catch (error) {
            console.log(error.message);
            return error
        }
    },
    login: async ({nickName, password, userTodos}) => {
        try{
            const user = await User.findOne({nickName})
            if(!user){
                throw new Error("User does not exist.")
            }

            if(bcrypt.compare(password, user.password)){
                const token = jwt.sign({nickName}, process.env.JWT_KEY, {expiresIn: '2d'})
                user.token = token;
                await user.save()
                if(userTodos){
                    user.userTodos = await Todo.find({ userId: user._id });
                }
                return user
            } else {
                throw new Error("Password does not match.")

            }
        } catch (error){
            console.log(error)
            return error
        }
    },
    auth: async ({token, userTodos}) => {
        try{
            const verify = jwt.verify(token, process.env.JWT_KEY)
            const user = await User.findOne({nickName: verify.nickName})
            if(!user){
                throw new Error("User does not exist")
            }
            const newToken = jwt.sign({nickName: user.nickName}, process.env.JWT_KEY, {expiresIn: '2d'})
            user.token = newToken;
            await user.save()
            if(userTodos){
                user.userTodos = await Todo.find({ userId: user._id });
            }
            return user
        } catch(error){
            console.log(error.message)
            return error
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
