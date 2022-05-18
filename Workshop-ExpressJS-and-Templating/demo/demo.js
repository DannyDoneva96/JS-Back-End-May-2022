// this is demonstration

const {Router} =require('express')

const router = Router()

router.get('/demo', function (req, res) { res.send('Welcome') })


router.get('/demo/:id', function (req, res) { res.send('<form method="POST"><input  name="name"><button>Send</button></form>') })

module.exports = router;