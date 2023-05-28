import mongoose from 'mongoose';
import { db_uri } from './index.js';

const connect = () => {
  mongoose
  .connect(db_uri)
  .then(() => console.log('Successfully connected to the database'))
  .catch((error) => console.error(error));
}

export const dbConnection = connect;



