const User = require('../models/User');
const { hash, compare } = require('bcrypt')

//TO DO poletata sprqmo zadanieto 
async function register(username, password) {
    const existing = await getUserByUsername(username)

    if (existing) {
        throw new Error(`User ${username} already registered`)
    }

    const hashedPassword = await hash(password, 10)

    const user = new User({ username, hashedPassword })
    await user.save()
    return user
}
async function login(username, password) {
    const user = await getUserByUsername(username);
    if (!user) {
        throw new Error('User does not exist')
    }

    const hasMatch = compare(password, user.hashedPassword)
    if (!hasMatch) {
        throw new Error('Incorect Password')
    }
return user;
}

//TO DO identificirame user sprqmo daden identifikator (email primerno)
async function getUserByUsername(username) {
    const user = await User.findOne({ username })
    return user
}

module.exports ={
    login,register
}