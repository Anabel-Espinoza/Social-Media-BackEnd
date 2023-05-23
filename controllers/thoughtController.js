const { Thought, User } = require('../models')
const { ObjectId } = require('mongoose').Types

module.exports = {
    getAllThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err))
    },
    getThoughtById(req, res) {
        Thought.findOne({ _id: req.params.id })
            .select('-_v')
            .then((thought) => 
                !thought   
                    ? res.status(404).json({ message: 'No thought found with that id' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err))
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err))
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.id })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought found with that id' })
                    // : Reactions.deleteMany({ _id: { $in: {}}}) Delete all reactions from that thought
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err))
    }
}
