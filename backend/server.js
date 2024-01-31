const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { Exam, Question } = require('./models/ExamData');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 5003;

mongoose.connect('mongodb://localhost:27017/examDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Exam Database Connected');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use(bodyParser.json());

// Create Exam
app.post('/exams', async (req, res) => {
  const exam = new Exam(req.body);
  try {
    const savedExam = await exam.save();
    res.status(201).json(savedExam);
  } catch (error) {
    next(error); // Pass the error to the error handler middleware
  }
});

// Read Exams
app.get('/exams', async (req, res) => {
  try {
    const exams = await Exam.find().populate('questions');
    res.status(200).json(exams);
  } catch (error) {
    next(error);
  }
});

// Update Exam
app.put('/exams/:examId', async (req, res) => {
  try {
    const updatedExam = await Exam.findByIdAndUpdate(req.params.examId, req.body, { new: true });
    res.status(200).json(updatedExam);
  } catch (error) {
    next(error);
  }
});

// Delete Exam
app.delete('/exams/:examId', async (req, res) => {
  try {
    const deletedExam = await Exam.findByIdAndDelete(req.params.examId);
    res.status(200).json(deletedExam);
  } catch (error) {
    next(error);
  }
});

// Create Question
app.post('/questions', async (req, res) => {
  try {
    const question = new Question(req.body);
    const savedQuestion = await question.save();
    res.status(201).json(savedQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read Questions
app.get('/questions', async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Question
app.put('/questions/:questionId', async (req, res) => {
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(req.params.questionId, req.body, { new: true });
    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Question
app.delete('/questions/:questionId', async (req, res) => {
  try {
    const deletedQuestion = await Question.findByIdAndDelete(req.params.questionId);
    res.status(200).json(deletedQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
