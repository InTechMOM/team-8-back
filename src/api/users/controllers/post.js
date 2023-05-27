import express from 'express';
import validate from '../../../validation/validate.js';
import { userModel } from '../../../models/users.js';
import { joiUserSchema } from '../../../schemas/users.js';

const router = express.Router();



/**
 * @swagger
 * /users:
 *  post:
 *    description: Creation API for users
 *    parameters:
 *      - name: name
 *        in: formData
 *        type: string
 *      - name: lastname
 *        in: formData
 *        type: string.
 *      - name: email
 *        in: formData
 *        type: string
 *      - name: rol
 *        in: formData
 *        type: string
 *    responses:
 *      201:
 *        description: User created
 *      400:
 *        description: Bad request
 */

const createUser = async (request, response) => {
  try{
    const userValidation = validate(joiUserSchema);
    if (userValidation.error){
      return response.status(400).json(validate.error.details);
    }
    const newUser = userModel(request.body); 
    const user = await newUser.save();
    return response.status(201).json(user); 
  }catch(error){
    console.log(error);
    return response.status(500).json({message: error});
  }
};

export default createUser;


