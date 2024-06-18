const mongoose = require('mongoose');

const UserPass = new mongoose.Schema({
    Customer: String,
    PO_number : Number,

},  { collection: 'passwords' });


const pass = mongoose.model('passwords', UserPass);


module.exports = pass; 
