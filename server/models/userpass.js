const mongoose = require('mongoose');

const UserPass = new mongoose.Schema({
    user:{
        type:String, 
        required : true, 
        unique: true, 
        lowercase : true, 
    }, 
    password :{
        type: String, 
        required: true, 
    }

},  { collection: 'passwords' });


const User = mongoose.model('passwords', UserPass);


module.exports = User; 
