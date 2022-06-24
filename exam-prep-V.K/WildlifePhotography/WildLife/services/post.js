// chetene suzdavane redaktirane iztrivane ...

const Post = require('../models/Post');

async function createPost(post) {

    const result = new Post(post)
    await result.save();
    return result

}

async function getPosts() {
    return Post.find({})
}

module.exports ={
    createPost: createPost,
    getPosts: getPosts
}