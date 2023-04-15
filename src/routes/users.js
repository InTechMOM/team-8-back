import express from 'express';
import { userSquema } from '../models/users.js';

const router = express.Router();

//create user
router.post('/users', (request, response) =>{
  const user = userSquema(request.body);
  user
    .save()
    .then((data) => response.json(data))
    .catch((error) => response.json({message: error}));
    console.log (response.status);
});

export const userRoutes = router;