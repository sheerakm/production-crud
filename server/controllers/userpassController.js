const User = require("../models/userpass");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs')


async function adduser(req, res) {
    const {user, password} = req.body;
    //get usrename pass 
    const username = await User.findOne({user});
    if (username) return res.sendStatus(409);

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

    try {

        const username = await User.findOne({user});

        // user does not exist 

        if (!username) return res.sendStatus(401); 

        // check if the hash of the function matches stored password 
        console.log(username.password)
        console.log(password);

        const passwordMatch = bcrypt.compareSync(password, username.password); 

        console.log(passwordMatch, "password match");

        if (!passwordMatch) return res.sendStatus(401); 

        const exp = Date.now() + 1000 * 60 * 60 ; 

        const token = jwt.sign({sub: username._id, exp: exp }, process.env.SECRET);

        res.cookie("Authorization", token, {
            expires:new Date(exp), 
            // httpOnly: true, 
            sameSite : 'lax',
            
            secure: process.env.NODE_ENV === "production", 
        });
        
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send("Error during login");
    }
    
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

// const login = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//       const user = await User.findOne({ email, password });
//       if (user) {
//         res.status(200).json({ message: 'Login successful' });
//       } else {
//         res.status(401).json({ message: 'Invalid credentials' });
//       }
//     } catch (error) {
//       res.status(500).json({ message: 'Server error' });
//     }
//   };
  
  const getUsers = async (req, res) => {
    const users = await User.find();
    res.json({ users });
  };


  const deleteUser = async (req, res) => {
    const username = req.params.user; // Rename for clarity
    try {
      const result = await User.findOneAndDelete({ user: username }); // Ensure the field name matches your schema
      if (result) {
        console.log('Deleted user:', result); // Optional: Log the result
        res.sendStatus(200); // Respond with OK status
      } else {
        res.status(404).json({ message: 'User not found' }); // Handle case where user is not found
      }
    } catch (error) {
      console.error('Error deleting user:', error); // Log the error
      res.status(500).json({ message: 'Server error' });
    }
  };
  

module.exports = {
    adduser, 
    login, 
    logout, 
    getUsers,
    deleteUser,
}