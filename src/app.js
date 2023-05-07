import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import { port } from './config/index.js';
import { dbConnection } from './config/dbconnection.js';
import {userRoutes} from './api/users/controllers/post.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());
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
dbConnection();

// server
app.listen(port, (error) => {
  if (error){
    console.log('Server error: Failed');
    process.exit(1);
  }
  console.log(`Server listening in port ${port}`);
});

