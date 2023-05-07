import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string(),
      
    lastname: Joi.string(),
    
    rol: Joi.string()
         .required(),   

    email: Joi.string()
        .email({ minDomainSegments: 2})
        .required(),
    creationDate: Joi.date()
})

export const joiUserSquema = schema;