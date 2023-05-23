const connection = require('../config/connection')
const { User, Thought } = require('../models')
const { getRandomUser, getRandomThought } = require('./data')

connection.on('error', (err) => err)

connection.once('open', async() => {
    console.log('connected')
    await User.deleteMany({})
    await Thought.deleteMany({})

    const users =[]

    for(let i = 0; i < 20; i++) {
        let username = getRandomUser()
        let email = username + '@mail.com'
        // let thoughts = [getRandomThought(), getRandomThought()]
        
        users.push({
            username, email
        })
    }
    console.log(users)
    await User.collection.insertMany(users)
    process.exit(0)
})