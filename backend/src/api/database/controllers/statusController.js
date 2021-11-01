const Status = require("../schemas/statusSchema");

const statusController = {
    create: async (title = "Default title") => {
        try {
            const status = new Status({ title: title });
            await status.save();
            return status;
        } catch (error) {
            console.log(error.message);
            return null;
        }
    },

    getAll: async () => {
        try {
            const result = await Status.find();
            return result || [];
        } catch (error) {
            console.log(error.message);
            return null;
        }
    },

    getById: async (_id) => {
        try {
            const result = await Status.findOne({ _id: _id });
            return result;
        } catch (error) {
            console.log(error.message);
            return null;
        }
    },

    getByTitle: async (title) => {
        try {
            const result = await Status.findOne({ title });
            return result;
        } catch (error) {
            console.log(error.message);
            return null;
        }
    },

    findOneAndRemove: async (_id) => {
        try{
            const result = await Status.findByIdAndRemove({ _id:_id });
            return result
        } catch (error){
            console.log(error.message)
            return null
        }
    },
};

module.exports = statusController;
