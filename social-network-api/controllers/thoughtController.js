const { Thought, User } = require('../models');

module.exports = {
    async getThoughts(req, res) {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
      } catch (err) {
        res.status(500).json(err);
      }
    },
async createThought(req, res) {
    try {
        const thought = await Thought.create(req.body);
        await User.findByIdAndUpdate(req.body.userId, {$push: { thought: thought._id } });
        res.json(thought);
      } catch (err) {
        res.status(500).json(err);
      }
    },

};

