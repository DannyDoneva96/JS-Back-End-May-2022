module.exports = {
   async  details(req, res) {
    const id=req.params.id
    const desert = await req.storage.getById(id)
    if(desert){
        res.render('details',{title:`${desert.name}`,desert})
    }else{
        res.redirect('/404')
    }
    }
}