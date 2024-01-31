const mongoose = require('mongoose');
const ExamSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  duration: Number,
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
});

const Exam = mongoose.model('Exam', ExamSchema);

const QuestionSchema = new mongoose.Schema({
  text: String,
  options: [{ text: String, isCorrect: Boolean }],
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports= Exam;