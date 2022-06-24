const router = require('express').Router();
const {getPosts,getPostById} = require('../services/post')
const {postViewModel} =require('../util/mappers')

router.get('/',(req, res) => {
    res.render('home',{title: 'Home page'});
})
// tuk shte napravim kataloga
// all post .html go preimenuvahme na ctallog.hbs
router.get('/catalog',async(req, res) => {
    const posts=(await getPosts()).map(postViewModel)
    res.render('catalog',{title: 'Catalog',posts});
})


router.get('/catalog/:id',     async(req, res) => {
    const id = req.params.id;
    const post = postViewModel(await getPostById(id));
    res.render('details',{title:post.title,post})
})
module.exports =router