const {Schema,model,Types:{ObjectId}}= require('mongoose')


const postSchema = new Schema({

// tuk si vzimame ot dokumenta neobhodimoto

	title : { type: String, minlength:[6,'title must be ....']},
	keyword : { type: String, minlength:[6,'title must be ....']},
	location : { type: String, maxlength:[16,'title must be ....']},
	date : { type: String,maxlength:[16,'title must be ....'],minlength:[16,'title must be ....']},
    //image validator 2.19 vuv vidioto
	image : { type: String, },
	description: { type: String },
	author : { type: ObjectId,ref:'User',required:true},
	votes : { type: [ObjectId], default:[]},
	rating : { type: Number, default:0},


})

const Post = model('Post', postSchema)
module.exports = Post;