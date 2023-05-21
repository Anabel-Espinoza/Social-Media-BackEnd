const { Schema, model } = require('mongoose')

const thoughtSchema = new Schema(
    {
        thoughtText: { type: String, required: true, maxlength: 280, minlength: 1 },
        createdAt: { type: Date, default: Date.now },
        //Use a getter method to format the timestamp on query 
        username: { type: String, required: true},
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)

// CREATE VIRTUAL FOR reactions.length
reactionCountSchema
    .virtual('reactionCount')
    .get(function() {
        return this.reactions.length
    })

const Thought = model('thought', thoughtSchema)

module.exports = Thought