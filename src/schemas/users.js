import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string(),
      
    lastname: Joi.string(),

    email: Joi.string()
        .email({ minDomainSegments: 2})
        .required(),
    
    rol: Joi.string()
         .valid('teacher', 'student')
         .required(),   
    creationDate: Joi.date()
})

export const joiUserSchema = schema;