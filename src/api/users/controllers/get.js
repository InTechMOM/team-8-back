import { userModel } from "../../../models/users.js";

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
 *      name: Rori
 *      lastname: Gilmore
 *      email: rgilmore@gmail.com
 *      rol: student
 */

/**
 * @openapi
 * /users:
 *  get:
 *   summary: Consult Users
 *   tags: [User]
 *   parameters:
 *    - in: query
 *      name: name
 *      description: Query for name
 *      schema:
 *        type: string
 *    - in: query
 *      name: lastname
 *      description: Query for lastname
 *      schema:
 *        type: string
 *    - in: query
 *      name: email
 *      description: Query for email
 *      schema:
 *        type: string
 *    - in: query
 *      name: rol
 *      description: Query for rol
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *     description: Consult results
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/User'
 *    400:
 *     description: Bad request
 *    500:
 *     description: Server error 
 */

const getAllUsers = async (request, response, next) => {
  try{
    
    const {name, lastname, rol, email } = request.query;

    const filters = {
      ...name && { name },
      ...lastname && { lastname },
      ...rol && { rol },
      ...email && { email }
    };

    const arrayUsers = await userModel.find(filters);
    return response.status(200).json(arrayUsers)
  } catch (error){
    response.status(400).json({
      error
    })
    
  }
}

export default getAllUsers;