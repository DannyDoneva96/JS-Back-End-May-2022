const User = require('../models/User');
const { hash, compare } = require('bcrypt')

//TO DO poletata sprqmo zadanieto 
async function register(firstName,lastName,email, password) {
    // smenih username s email
    const existing = await getUserByUsername(email)

    if (existing) {
        throw new Error(`User ${email} already registered`)
    }

    const hashedPassword = await hash(password, 10)
     // i tuk smenqsh TO DO
    const user = new User({ firstName, lastName, email, hashedPassword })
    await user.save()
    return user
} 
async function login(email, password) {
    const user = await getUserByUsername(email);
    if (!user) {
        throw new Error('User does not exist')
    }

    const hasMatch = compare(password, user.hashedPassword)
    if (!hasMatch) {
        throw new Error('Incorect Password')
    }
return user;
}

//TO DO identificirame user sprqmo daden identifikator (email primerno) //i tuk smenih
async function getUserByUsername(email) {
    const user = await User.findOne({ email : new RegExp(`^${email}$`,'i')})
    return user;
}

module.exports ={
    login,register
}