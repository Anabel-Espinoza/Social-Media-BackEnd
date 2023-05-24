const router = require('express').Router()
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    updateThought,
    createRection,
    deleteReaction
} = require('../../controllers/thoughtController')

// api/thoughts
router.route('/')
    .get(getAllThoughts)
    .post(createThought)

// api/thoughts/:id
router.route('/:id')
    .get(getThoughtById)
    .delete(deleteThought)
    .put(updateThought)

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(createRection)

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

module.exports = router