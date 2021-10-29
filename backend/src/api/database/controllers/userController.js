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
                        from: "todo",
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

    getById: async (_id) => {
        try {
            const result = await User.findById(_id);
            return result || null;
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    },

    getByIdWithTodos: async (_id) => {
        try {
            const result = await User.findById(_id);
            result.userTodos = await Todo.find({ userId: _id });
            return result || null;
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    },

    getByNickName: async (nickName) => {
        try {
            const result = await User.findOne({ nickName });
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
            return error.messagel;
        }
    },
};

module.exports = userController;
