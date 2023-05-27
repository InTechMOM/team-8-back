import Boom from '@hapi/boom';

const validate = (schema) => {
  return async (request, response, next) => {
    try {
      await schema.validateAsync(request.body);
      next();
    } catch (error) {
      return response.send(Boom.badData(error));
    }
  }
}

export default validate;