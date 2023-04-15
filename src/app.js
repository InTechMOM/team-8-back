import morgan from 'morgan';
import express from 'express';
import { port } from './config/index.js';
import mongoose from 'mongoose';
import { db_uri } from './config/index.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import {userRoutes} from './routes/users.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(morgan("dev"));

//middleware
app.use(express.json());
app.use('/', userRoutes);

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
