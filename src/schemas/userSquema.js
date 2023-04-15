import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
      
    lastname: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    
    rol: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),   

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'es'] } })
})

export const userSquema = mongoose.model('User', schema);