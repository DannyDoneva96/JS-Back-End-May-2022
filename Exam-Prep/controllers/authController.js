const router = require('express').Router()

const authService =require('../services/authService')
const {isGuest,isAuth} = require('../middlewares/authMiddleware')
// const{getErrorMessage} = require('../utils/errorHelpers')

const COOKIE_SESSION_NAME = 'user'
exports.COOKIE_SESSION_NAME

router.get('/login',  (req, res)=>{
    res.render('auth/login')
})

router.get('/register', isGuest, (req, res)=>{
    res.render('auth/register')
})
router.post('/login',  async(req, res)=>{
    const {username,password} = req.body
 const user =  await  authService.login(username, password)
 const token = await authService.createToken(user)

 res.cookie(COOKIE_SESSION_NAME,token,{httpOnly: true});
 res.redirect('/')
})

router.post('/register',isGuest, async (req, res)=>{
  const {password,repeatPassword,...userData} = req.body;
  if(password!==repeatPassword){
    return res.render('auth/register',{error: 'password is incorrect'})
 }

  try{
   const createdUser= await authService.create({password, ...userData});
   const token = await authService.createToken(createdUser)
   res.cookie(COOKIE_SESSION_NAME,token,{httpOnly: true});
    res.redirect('/')
  }catch(error){
    return res.render('auth/register',{error: getErrorMessage(error)})
  }
   res.end()
})

router.get('/logout',isAuth,  (req, res)=>{
  res.clearCookie(COOKIE_SESSION_NAME)
  res.redirect('/')
})

module.exports = router