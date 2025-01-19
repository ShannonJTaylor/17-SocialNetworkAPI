const { User, Thought } = require('../models');
module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find().populate('thoughts').populate('friends');
            res.json(users);
        }   catch (err) {
            res.status(500).json(err);
        }
    },
    async getUserById(req, res) {
        try {
            const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
            if (!user) return res.status(404).json({message: 'No user found with this id!'});
            res.json(user);
        }   catch (err) {
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.json(newUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //Implement updateUser, deleteUser, add Friend, removeFriend
};
    
