import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    require: true
  },
  rol: {
    type: String,
    require: true,
    enum: ['student', 'teacher']
  },
  creationDate: {
    type: Date,
    default: new Date().toISOString()
  }
});

export const userModel = mongoose.model('User', schema);