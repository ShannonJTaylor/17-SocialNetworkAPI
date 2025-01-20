const router = require('express').Router();
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

//Routes for users
router
    .route('/') //Route for all users
    .get(getUsers) //Get all users
    .post(createUser); //Create a new user

router
    .route('/:id') //Routes for a specific user by ID
    .get(getUserById) //Get a user by ID
    .put(updateUser) //Update a user by ID
    .delete(deleteUser); //Delete a user by ID

//Routes for managing friends
router
    .route('/:userId/friends/:friendId') 
    .post(addFriend) //Add a friend to a user's friends array
    .delete(removeFriend); //Remove a friend from a user's friends array

module.exports = router;
