
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
app.use(cors());
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

app.post('/login', userpassController.login);
app.get('/logout', userpassController.logout);
app.post('/adduser', userpassController.adduser);



app.listen(process.env.PORT); 