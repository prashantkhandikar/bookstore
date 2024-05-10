const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();


// Connect to MongoDB Atlas
mongoose
  .connect(
    "mongodb+srv://p1:1234@cluster0.i6bzfkg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

// Book Schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  description: String
});

const Book = mongoose.model('Book', bookSchema);

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/api/books', async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  
app.use(express.static('public'));