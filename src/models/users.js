import { date } from 'joi';
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  lastname: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  rol: {
    type: String,
    require: true
  },
  creationDate: {
    type: Date,
    default: new Date().toISOString()
  }
});

export const userSquema = mongoose.model('User', schema);