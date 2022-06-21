const router = require('express').Router()
const authService =require('../services/authService')

router.get('/login',  (req, res)=>{
    res.render('auth/login')
})

router.get('/register',  (req, res)=>{
    res.render('auth/register')
})
router.post('/login',  async(req, res)=>{
    const {username,password} = req.body
 const token =  await  authService.login(username, password)
})

router.post('/register', async (req, res)=>{
  const {username,password,repeatPassword,adress} = req.body;
  if(password!==repeatPassword){
    return res.render('auth/register',{error: 'password is incorrect'})
 }

  try{
    await authService.create({username,password,adress});
    res.redirect('/login')
  }catch(err){
    return res.render('auth/register',{error: 'password is incorrect'})
  }
   res.end()
})

module.exports = router