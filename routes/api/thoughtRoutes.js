const router = require('express').Router()
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    updateThought
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

module.exports = router