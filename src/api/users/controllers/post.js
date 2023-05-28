import express from 'express';
import validate from '../../../validation/validate.js';
import { userModel } from '../../../models/users.js';
import { joiUserSchema } from '../../../schemas/users.js';

const router = express.Router();

/**
 * @openapi 
 *  components:
 *   schemas:
 *    User:
 *     type: object
 *     properties:
 *      name:
 *        type: string
 *      lastname:
 *        type: string
 *      email:
 *        type: string
 *      rol:
 *        type: string
 *     required:
 *      - email
 *      - rol
 *     example:
 *      name: Diana
 *      lastname: Montes
 *      email: dmontes@example.com
 *      rol: teacher
 * 
 */

/**
 * @openapi
 * /users:
 *  post:
 *   summary: Creation of users
 *   tags: [User]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/User'
 *   responses:
 *    201:
 *     description: User created
 *    400:
 *     description: Bad request
 *    409:
 *     description: Email or name is assigned to another user
 *    500:
 *     description: Server error
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


