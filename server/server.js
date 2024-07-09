
if (process.env.NODE_ENV != 'production') {
    require("dotenv").config();
}
//import dependencies 

const connectToDB = require('./config/connectToDB');
const express = require("express");
const cors = require('cors');
const Note = require('./models/DataRow.js')
const dataController = require("./controllers/DataController");
const userpassController = require("./controllers/userpassController");
const cookieParser = require('cookie-parser'); 

const app = express(); 
app.use(cors({
    origin: 'http://localhost:5000',
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
}));
  
// app.use((req, res, next) => {  #check this 
//     res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     console.log('CORS Headers Set:', res.getHeaders());
//     next();
// });


app.use(cookieParser());

//configure express app 
app.use(express.json()); 



connectToDB();

//routing 

//start our server 
app.get("/data", dataController.fetchAllData);
// app.get('/login', dataController.login);  check this
app.get("/data/:id", dataController.fetchDataByID);
app.post("/onerow", dataController.createRow);
app.put("/data/:id", dataController.updateNote);
app.delete("/data/:id", dataController.deleteNote);
app.get('/search/:field/:value', dataController.fetchDocumentsByWord);

app.get('/users', userpassController.getUsers);

app.post('/login', userpassController.login);
app.get('/logout', userpassController.logout);
app.post('/adduser', userpassController.adduser);
app.delete('/deleteuser/:user', userpassController.deleteUser);





app.listen(process.env.PORT); 