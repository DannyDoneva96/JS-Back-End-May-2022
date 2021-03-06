function mapErrors(err){
    if(Array.isArray(err)){
            return err;

    }else if (err.name == 'ValidationError'){
        return Object.values(err.errors).map(e=>({msg:e.message}));
    }else if (typeof err.message == 'string'){
        return [ {msg:err.message}]
    }else{
        return [ {msg:'Request error',}] 
    }
}

function postViewModel(post){
    return {
        _id: post._id,
        title:post.title,
        keyword:post.keyword,
        location:post.location,
        date:post.date,
        image:post.image,
        description:post.descriptiontitle,
       
        rating:post.rating
    }
}
module.exports ={mapErrors,postViewModel}