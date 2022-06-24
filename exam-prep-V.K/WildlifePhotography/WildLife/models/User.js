const {Schema,model}= require('mongoose')

//TO DO smeni user modela
//TO DO add validacion

const userSchema = new Schema({
    username:{ type: 'string', required: true},
    hashedPassword:{ type: 'string', required: true}
});

userSchema.index({username:1},{
    unique: true,
    collation:{ 
        locale: 'en',
        strength:2
    }
})
const User = model('User', userSchema);
module.exports=User;