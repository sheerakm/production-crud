const User = require("../models/userpass");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs')

async function adduser(req, res) {
    const {user, password} = req.body;
    //get usrename pass 

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    await User.create({user, password:hash});
    //hash password
    //create an instanse of User 
    //save to db 
    res.sendStatus(200);
}

async function login(req, res) {
    const {user, password }= req.body;

    const username = await User.findOne({user});

    // user does not exist 

    if (!username) return res.sendStatus(401); 

    // check if the hash of the function matches stored password 

    const passwordMatch = bcrypt.compareSync(password, username.password); 

    if (!passwordMatch) return res.sendStatus(401); 

    const exp = Date.now() + 1000 * 60 * 60 ; 

    const token = jwt.sign({sub: user._id, exp: exp }, process.env.SECRET);

    res.cookie("Authorization", token, {
        expries:new Date(exp), 
        httpOnly: true, 
        sameSite : 'lax',
        secure: process.env.NODE_ENV === "production", 
    });

    res.sendStatus(200); 

    
}

async function logout(req, res) {
    try {
        await res.clearCookie('Authorization');
        res.redirect('/');
        // res.sendStatus(200);
    } catch (error) {
        res.status(500).send("Error during logout");
    }
}

module.exports = {
    adduser, 
    login, 
    logout, 
}