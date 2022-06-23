const jwt = require('jsonwebtoken')
const {COOKIE_SESSION_NAME} =require('../controllers/authController')
const {SECRET} = require('../services/authService')

exports.auth = (req, res, next) => {
    const token = req.cookies[COOKIE_SESSION_NAME]
    if(token){
        jwt.verify(token,SECRET,((err,decodedToken)=>{
            if(err){
                res.clearCookie(COOKIE_SESSION_NAME)
                return next(err)
            }
            req.user =decodedToken
            res.locals=decodedToken
        }))
    }else{  next()}
  
}