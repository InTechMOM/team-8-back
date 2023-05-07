import express from 'express';
import Boom from '@hapi/boom';
import { userSquema } from '../../../models/users.js';
import { joiUserSquema } from '../../../schemas/users.js'
const router = express.Router();

//Data Validation with Joi
const validate = (schema) => {
  return async (request, response, next) => {
    try {
      await schema.validateAsync(request.body);
      next();
    } catch (error) {
      response.send(Boom.badData(error));
    }
  }
}

//create user
router.post('/users', validate(joiUserSquema), (request, response) =>{
  const user = userSquema(request.body);
  user
    .save()
    .then((data) => response.json(data))
    .catch((error) => response.json({message: error}));
    //console.log (response.sendStatus(200));
});

export const userRoutes = router;


