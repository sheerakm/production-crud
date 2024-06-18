const mongoose = require('mongoose');

connectToDb().catch(err => console.log(err));

async function connectToDb() {
    try{
         await mongoose.connect('mongodb://elrond:27017/Carls_data');
         console.log("connected to elrond")
    } catch(err) {
        console.log("did not conenct to Elrond.")
    }
}


module.exports = connectToDb; 