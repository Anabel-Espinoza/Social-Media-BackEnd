const { User } = require('../models')
const { ObjectId } = require('mongoose').Types

module.exports = {
    getAllUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
    }
}