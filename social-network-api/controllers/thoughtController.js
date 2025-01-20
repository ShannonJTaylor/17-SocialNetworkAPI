const { Thought, User } = require('../models');

module.exports = {
  //Get all thoughts
    async getThoughts(req, res) {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    //Get a single thought by ID
    async getThoughtById(req, res) {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
          return res.status(404).json({ message: 'No thought found with this id!' });
        }
        res.json(thought);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    //Create a new thought 
    async createThought(req, res) {
    try {
        //Create the new thought using the request body
        const thought = await Thought.create(req.body);

        //Ensure userId is provided in the request body-needed to associate the throught with a user.
        const user = await User.findByIdAndUpdate(
          req.body.userId, 
          { $push: { thought: thought._id } }, // Add the thought's ID to the user's 'thoughts' array
          { new: true } 
        );

        //If no user is fournd with the userId, send an error
        if (!user) {
          return res.status(404).json({ message: 'No user found with this id!' });
        }

        res.json(thought); //Respond with the newly created throught
      } catch (err) {
        res.status(500).json(err); //error handling during the process
      }
    },

    //Update an existing throught by ID
    async updateThought(req, res) {
      try {
        const thought = await Thought.findByIdAndUpdate(
          req.params.id, //Find the thought by its ID
          req.body,
          {new: true}
        );
        if (!thought) {
          return res.status(404).json({ message: 'No thought found with this id!' });
        }
        res.json(thought);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    //Delete a thought by ID
    async deleteThought(req, res) {
      try {
        const thought = await Thought.findByIdAndDelete(req.params.id);
        if (!thought) {
          return res.status(404).json({ message: 'No thought found with this id!' });
        }
        res.json({message: 'Thought successfully deleted.'});
      } catch (err) {
        res.status(500).json(err);
      }
    },

    //Add a reaction to a thought
    async addReaction(req, res) {
      try {
        const thought = await Thought.findByIdAndUpdate(
          req.params.thoughtId,
          { $push: { reactions: req.body } }, //Add reaction to the throught's reactions array
          { new: true }
        );
        if (!thought) {
          return res.status(404).json({ message: 'No thought found with this id!' });
        }
        res.json(thought);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    //Remove a reaction from a thought
    async removeReaction(req, res) {
      try {
        const thought = await Thought.findByIdAndUpdate(
          req.params.thoughtId,
          { $pull: { reactions: { reactionId: req.params.reactionId } } }, //Remove the reaction from the thought's reactions array
          { new: true }
        );
        if (!thought) {
          return res.status(404).json({ message: 'No thought found with this id!' });
        }
        res.json(thought);
      } catch (err) {
        res.status(500).json(err);
      }
    }
};

