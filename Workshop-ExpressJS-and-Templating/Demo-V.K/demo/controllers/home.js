module.exports={
   async home(req, res) {
        const deserts = await req.storage.getAll();

        res.render('index',{deserts,title:"DESSERTS"})
    }
}