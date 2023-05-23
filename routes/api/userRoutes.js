const router = require('express').Router()
const {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
} = require('../../controllers/userController')

// api/users
router.route('/')
    .get(getAllUsers)
    .post(createUser)

// api/users/:id
router.route('/:id')
    .get(getUserById)
    .delete(deleteUser)
    .put(updateUser)

module.exports = router