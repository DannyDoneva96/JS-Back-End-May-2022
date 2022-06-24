const {Schema,model}= require('mongoose')

//TO DO smeni user modela
//TO DO add validacion

const userSchema = new Schema({
    //TO DO smenqme
    firstName:{ type: 'string', required: true},
    lastName:{ type: 'string', required: true},
    email:{ type: 'string', required: true},

    hashedPassword:{ type: 'string', required: true}
});

userSchema.index({email:1},{
    unique: true,
    collation:{ 
        locale: 'en',
        strength:2
    }
})
const User = model('User', userSchema);
module.exports=User;