const router = require('express').Router();
const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController');

//Routes for thoughts
router
    .route('/') //Route for all thoughts
    .get(getThoughts) //Get all thoughts
    .post(createThought); //Create a new thought

//Routes for a specific thought by ID
router
    .route('/:id') //Routes for a specific thought by ID
    .get(getThoughtById) //Get a thought by ID
    .put(updateThought) //Update a thought by ID
    .delete(deleteThought); //Delete a thought by ID

//Routes for managing reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction)

    //route for deleting a reaction from a thought
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;