const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.create = (userData) => User.create(userData)
const SECRET = '1234567890abcdef'
exports.login = async(username,password) =>{
   const user = await User.findOne({username})
   if(!user){
    throw{
        message: ' This useer do not exist!'
    }
   }
  const isValid= bcrypt.compare(password, user.password)
  if(!isValid){
    throw{
        message: ' Wrong Password'
    }
  }
  const payload = {_id: user._id,username: user.username, password: user.password}
  const promise=new Promise((resolve, reject)=>{
    jwt.sign(payload,SECRET,{expiresIn:'2d'},(err,decodedToken)=>{
          if(err){

            return reject(err)
          }
          resolve(decodedToken)
    })
  })
  return promise
}