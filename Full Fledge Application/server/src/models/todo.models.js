import mongoose from 'mongoose';

// Define Schema
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 3,
    maxlength: 255,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    minlength: 3,
    maxlength: 1024,
    required: true,
    trim: true,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

// Create Model
export const Todo = mongoose.model('Todo', todoSchema);
