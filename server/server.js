
if (process.env.NODE_ENV != 'production') {
    require("dotenv").config();
}
//import dependencies 

const connectToDB = require('./config/connectToDB');
const express = require("express");
const cors = require('cors');
const Note = require('./models/DataRow.js')
const dataController = require("./controllers/DataController");

const app = express(); 
app.use(cors());

//configure express app 
app.use(express.json()); 

connectToDB();

//routing 

//start our server 
app.get("/data", dataController.fetchAllData);
app.get('/login', dataController.login);
app.get("/data/:id", dataController.fetchDataByID);
app.post("/data", dataController.createNote);
app.put("/data/:id", dataController.updateNote);
app.delete("/data/:id", dataController.deleteNote);
app.get('/search/:field/:value', dataController.fetchDocumentsByWord);



app.listen(process.env.PORT); 