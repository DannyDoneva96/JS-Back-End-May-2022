const router = require('express').Router();
const {getPosts} = require('../services/post')
const {postViewModel} =require('../util/mappers')

router.get('/',(req, res) => {
    res.render('home',{title: 'Home page'});
})
// tuk shte napravim kataloga
// all post .html go preimenuvahme na ctallog.hbs
router.get('/catalog',async(req, res) => {
    const posts=(await getPosts()).map(postViewModel)
    res.render('catalog',{title: 'Catalog page',posts});
})
module.exports =router