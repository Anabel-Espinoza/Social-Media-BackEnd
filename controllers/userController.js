const { User, Thought } = require('../models')
const { ObjectId } = require('mongoose').Types

module.exports = {
    getAllUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
    },
    getUserById(req, res) {
        User.findOne({ _id: req.params.id })
            .select('-_v')
            .then((user) => 
                !user   
                    ? res.status(404).json({ message: 'No user found with that id' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    },
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err))
    },
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.id })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with that id' })
                    // : Thought.deleteMany({ _id: { $in: {}}}) Delete all thoughts from that user
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? req.status(404).json({ message: 'No user found with that id'})
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    }
}