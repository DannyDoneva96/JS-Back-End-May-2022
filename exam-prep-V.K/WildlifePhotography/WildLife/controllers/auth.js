const { register,login } = require('../services/user')
const router = require('express').Router();
const mapErrors =require('../util/mappers')
const {isUser , isGuest} = require('../middleware/guards')


router.get('/register',isGuest(), (req, res) => {
    // register viuto demek
    res.render('register')
})
//TO DO proveri form actions metodite i poletata s imena
router.post('/register',isGuest(),async (req, res) => {
    try {
        if (req.body.password != req.body.repass) {
            throw new Error('password dont match')
        }
    const user=   await  register(req.body.username, req.body.password)
    req.session.user = user
    res.redirect('/'); //TO DO redirect requirements
    } catch (err) {
        console.error(err)
        const errors = mapErrors(err)
        res.render('register',{data:{username:req.body.username},errors})
    }
})

router.get('/login',isGuest(), (req, res) => {
    res.render('login')

})
//TO DO proveri form actions metodite i poletata s imena

router.post('/login', isGuest(),async(req, res) => {
try{
    const user= await login(req.body.username, req.body.password)
    req.session.user = user
    res.redirect('/'); // TO DO redirect requirements

}catch (err) {
    console.error(err);
    const errors = mapErrors(err)
    res.render('login',{data:{username:req.body.username},errors})
}
})

router.get('/logout', isUser(),(req, res) => {
delete req.session.user
res.redirect('/')})

module.exports = router;