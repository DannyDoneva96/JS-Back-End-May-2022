const { register } = require('../services/user')
const router = require('express').Router();

router.get('/register', (req, res) => {
    // register viuto demek
    res.render('register')
})
//TO DO proveri form actions metodite i poletata s imena
router.post('/register',async (req, res) => {
    try {
        if (req.body.password !== req.body.repass) {
            throw new Error('password dont match')
        }
    const user=   await  register(req.body.username, req.body.password)
    req.session.user = user
    res.redirect('/'); //TO DO redirect requirements
    } catch (err) {
        console.error(err)
        res.render('register',{layout:false,data:{username:req.body.username}})
    }
})

router.get('/login', (req, res) => {
    res.render('login')

})

module.exports = router;