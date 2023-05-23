const connection = require('../config/connection')
const { User, Thought } = require('../models')
const { getRandomUser, getRandomThought } = require('./data')

connection.on('error', (err) => err)

connection.once('open', async() => {
    console.log('connected')
    await User.deleteMany({})
    await Thought.deleteMany({})

    const users =[]
    let thoughts = []

    for(let i = 0; i < 10; i++) {
        let username = getRandomUser()
        let email = username + '@mail.com'
        let thought = getRandomThought()
        let date = Date.now()
        // thoughts.push({ thought, date, username })        
        users.push({ username, email })
    }
    console.log(thoughts)

    console.log(users)
    await User.collection.insertMany(users)
    // await Thought.collection.insertMany(thoughts)
    process.exit(0)
})