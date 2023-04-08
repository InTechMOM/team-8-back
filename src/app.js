import express from 'express';
import { port } from './config/index.js';
import mongoose from 'mongoose';
import { db_uri } from './config/index.js';

const app = express();

//routes

app.get('/', (request, response, error) => {
  response.send('status: ok');
})

//mongodb connection
mongoose
.connect(db_uri)
.then(() => console.log('Successfully connected to the database'))
.catch((error) => console.error(error));

app.listen(port, (error) => {
  if (error){
    console.log('Server error: Failed');
    process.exit(1);
  }
  console.log(`Server listening in port ${port}`);
});
