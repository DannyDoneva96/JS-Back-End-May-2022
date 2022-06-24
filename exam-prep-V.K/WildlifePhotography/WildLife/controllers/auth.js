const { register,login } = require('../services/user')
const router = require('express').Router();
const mapErrors =require('../util/mappers')
router.get('/register', (req, res) => {
    // register viuto demek
    res.render('register')
})
//TO DO proveri form actions metodite i poletata s imena
router.post('/register',async (req, res) => {
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

router.get('/login', (req, res) => {
    res.render('login')

})
//TO DO proveri form actions metodite i poletata s imena

router.post('/login', async(req, res) => {
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

module.exports = router;