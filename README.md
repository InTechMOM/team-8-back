# IntechMom mvp

<br />

## Manual Installation

- git clone [here goes your team repo URL]
- cd [here goes your folder team repo name]
- npm install
- Prepare the environment variables by generating .env file just as .env.sample file
- npm start

<br />

## [Environment Variables](#environment-variables)

The environment variables should be set in a '.env' file just as .env.sample file. You should set the values of these keys:

```js
# URL of the Mongo DB
DB_URI=DB_URI_HERE

# JWT
# JWT secret key for access token
JWT_SECRET_KEY=JWT_SECRET_KEY_HERE
# JWT secret key for refresh token
REFRESH_TOKEN_SECRET_KEY=REFRESH_TOKEN_SECRET_KEY_HERE

# AWS configurations for S3 and SES services
AWS_REGION=AWS_REGION_HERE
AWS_ACCESS_KEY_ID=AWS_ACCESS_KEY_ID_HERE
AWS_SECRET_ACCESS_KEY=AWS_SECRET_ACCESS_KEY_HERE
```

<br />

## [Validation](#validation)

Request data is validated using [Joi](https://github.com/hapijs/joi).

The validation schemas are defined in the src/models/index.js directory and are used in the controllers by providing body as the parameter to the specific validation function.

```js
# A sample function in user.validator.js
  function validateEditUser(body) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(24),
        username: Joi.string().min(3).max(15),
        language: Joi.string().valid('tr', 'en'),
        gender: Joi.string().valid('male', 'female', 'other'),
        birthDate: Joi.date()
    });
    return schema.validate(body);
}
