const { register,login } = require('../services/user')
const router = require('express').Router();
const {mapErrors} =require('../util/mappers')
const {isUser , isGuest} = require('../middleware/guards')


router.get('/register',isGuest(), (req, res) => {
    // register viuto demek
    res.render('register',{title: 'Register Page'})
})
//TO DO proveri form actions metodite i poletata s imena
router.post('/register',isGuest(),async (req, res) => {
    try {
        if(req.body.password.trim()==''){
            throw new Error('password invalid')

        }else if (req.body.password != req.body.repass) {
            throw new Error('password dont match')
        }
        //Korekciq sprqmo tekushtata zadacha 
    // const user=   await  register(req.body.username, req.body.password)
    const user=   await  register(req.body.firstName,req.body.lastName,req.body.email, req.body.password)
    req.session.user = user
    res.redirect('/'); //TO DO redirect requirements
    } catch (err) {
        console.error(err)
        const errors = mapErrors(err)

        
        // tuk sushto 
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        }
        res.render('register',{title: 'Register Page',data,errors})
    }
})

router.get('/login',isGuest(), (req, res) => {
    res.render('login',{title:'Login Page'})

})
//TO DO proveri form actions metodite i poletata s imena

router.post('/login', isGuest(),async(req, res) => {
try{
    const user= await login(req.body.email, req.body.password)
    req.session.user = user
    res.redirect('/'); // TO DO redirect requirements

}catch (err) {
    console.error(err);
    const errors = mapErrors(err)
    //smenih username s email zaradi zadachata
    res.render('login',{title:'Login Page',data:{email:req.body.email},errors})
}
})

router.get('/logout', isUser(),(req, res) => {
delete req.session.user
res.redirect('/')})

module.exports = router;