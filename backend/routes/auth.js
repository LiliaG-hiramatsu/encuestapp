import { Router } from 'express';
import register from '../controllers/auth/register.js';
import signin from '../controllers/auth/signin.js';

import validator from '../middlewares/validator.js';
import existsUser from '../middlewares/existsUser.js';
import notExistsUser from '../middlewares/notExistsUser.js';
import isPasswordOk from '../middlewares/isPasswordOk.js';
import isValidPassword from '../middlewares/isValidPassword.js';
import isValidToken from '../middlewares/isValidToken.js';

import registerSchema from '../schemas/register.js';
import signinSchema from '../schemas/signin.js'

let authRouter = Router()

authRouter.post(
    '/registro',
    //validator(registerSchema), 
    //existsUser, 
    //isValidPassword,
    register
)

authRouter.post(
    '/login', 
    //validator(signinSchema), 
    //notExistsUser, 
    //isPasswordOk, 
    //isValidToken,
    signin
)

export default authRouter