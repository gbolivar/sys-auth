
import path from 'path';
import { TokenService } from '../../domain/services/index.js';
import { Hash } from '../../infrastructure/utils/index.js'

export const CreateTokenHandler = (req, res, next) => {
    

    req.body['JwtHash'] = Hash.jwtKey()
    req.body['AppHash'] = Hash.sha512()

    next()
           
};