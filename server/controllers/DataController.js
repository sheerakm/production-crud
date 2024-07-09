
const Note = require("../models/DataRow");

const User = require("../models/userpass");

const fetchAllData = async (req, res) => {
  // Find the notes
  const allData = await Note.find();
  console.log(allData);
  // Respond with them
  res.json({ allData });
};

const fetchDocumentsByWord = async (req, res) => {
  const field = req.params.field;
  const value = req.params.value;

  let search_param = { 
    $or:[
    {[field]: { $regex: value, $options: 'i' }}, 
    {[field]: { $regex: '^' + value, $options: 'i' }} 
  ]};


  try {
      const documents = await Note.find(search_param);
      console.log("docuyments are:");
      console.log(documents);
      if (documents.length > 0) {
          res.json(documents);
      } else {
          res.status(404).send({ message: 'No documents found' });
      }
  } catch (err) {
      res.status(500).send(err);
  }
};

const fetchDataByID = async (req, res) => {
  // Get id off the url
  const noteId = req.params.id;
  // Find the note using that id
  const note = await Note.findById(noteId);
  // Respond with the note
  res.json({ note });
};

const createRow = async (req, res) => {
  // Create a note with it
  const title = req.body.title; 
  const body = req.body.body; 
  const data = await Note.create(req.body);

  // respond with the new note
  res.json({ data });
};

const updateNote = async (req, res) => {
  // Get the id off the url
  const noteId = req.params.id;
  // Find and update the record
  await Note.findByIdAndUpdate(noteId, req.body);
  // Find updated note
  const note = await Note.findById(noteId);
  // Respond with it
  res.json({ note });
};

const deleteNote = async (req, res) => {
  // Delete the record
  await Note.deleteOne({ id: req.params.id });
  // Respond
  res.json({ success: "Record deleted" });
};




module.exports = {
  // getUsers,
  // login, 
  fetchAllData,
  fetchDocumentsByWord,
  fetchDataByID,
  createRow,
  updateNote,
  deleteNote,
};

