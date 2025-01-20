const { User } = require('../models/User');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find().populate('thoughts').populate('friends');
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
      if (!user) {
        return res.status(404).json({ message: 'No user found with this id!' });
      }
      res.json(user);
    } catch (err) {
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

  // Implement updateUser
  async updateUser(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } // Return the updated user
      );
      if (!user) {
        return res.status(404).json({ message: 'No user found with this id!' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Implement deleteUser
  async deleteUser(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'No user found with this id!' });
      }
      res.json({ message: 'User successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Implement addFriend
  async addFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $push: { friends: req.params.friendId } }, // Add friend to the user's friends array
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'No user found with this id!' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Implement removeFriend
  async removeFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } }, // Remove the friend from the user's friends array
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'No user found with this id!' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};














// const { User } = require('../models/User');
// module.exports = {
//     async getUsers(req, res) {
//         try {
//             const users = await User.find().populate('thoughts').populate('friends');
//             res.json(users);
//         }   catch (err) {
//             res.status(500).json(err);
//         }
//     },
//     async getUserById(req, res) {
//         try {
//             const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
//             if (!user) return res.status(404).json({ message: 'No user found with this id!' });
//             res.json(user);
//         }   catch (err) {
//             res.status(500).json(err);
//         }
//     },
//     async createUser(req, res) {
//         try {
//             const newUser = await User.create(req.body);
//             res.json(newUser);
//         }   catch (err) {
//             res.status(500).json(err);
//         }
//     },

//     //Implement  updateUser
//     async updateUser(req, res) {
//         try {
//             const user = await User.findByIdAndUpdate(
//                 req.params.id,
//                 req.body,
//                 { new: true } //Return the updated user
//             );
//             if (!user) {
//                 return res.status(404).json({ message: 'No user found with this id!' });
//         }
//         res.json(user);
//     }   catch (err) {
//         res.status(500).json(err);
//     }
//     },

//     //implement deleteUser
//     async deleteUser(req, res) {
//         try {
//             const user = await User.findByIdAndDelete(req.params.id);
//             if (!user) {
//                 return res.status(404).json({ message: 'No user found with this id!' });
//             } 
//             res.json({ message: 'User successfully deleted!' });
//         }   catch (err) {
//             res.status(500).json(err);
//         }
//     },

//     //Implement addFriend
//     async addFriend(req, res) {
//         try {
//             const user = await User.findByIdAndUpdate(
//                 req.params.userId,
//                 { $push: { friends: req.params.friendId } }, //Add friend to the user's friends array
//                 { new: true }
//             );
//             if (!user) {
//                 return res.status(404).json({ message: 'No user found with this id!' });
//             }
//             res.json(user);
//         }   catch(err) {
//             res.status(500).json(err);
//         }
//     },

//     //Implement removeFriend
//     async removeFriend(req, res) {
//         try {
//             const user = await User.findByIdAndUpdate(
//                 req.params.userId,
//                 { $pull: { friends: req.params.friendId } }, //Remove the friend from the user's friends array
//                 { new: true }
//             );
//             if (!user) {
//                 return res.status(404).json({ message: 'No user found with this id!' });
//             }
//             res.json(user);
//         }   catch (err) {
//             res.status(500).json(err);
//         }
//     },
    
// };
    
