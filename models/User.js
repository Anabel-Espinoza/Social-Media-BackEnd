const { Schema, model } = require('mongoose')

const validateEmail = (email) => {
    let re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    return re.test(email)
}

const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true, trimmed: true },
        email: { type: String , validate: validateEmail, unique: true, required: true },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thoughts'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)

// CREATE VIRTUAL FOR friends.length
friendCountSchema
    .virtual('friendCount')
    .get(function() {
        return this.friends.length
    })

const User = model('user', userSchema)

module.exports = User