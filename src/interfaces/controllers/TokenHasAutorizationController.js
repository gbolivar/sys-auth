import { TokenHasAutorizationService } from '../../application/use-cases/index.js';
import { log, responseCode, responseSuccess, Permission} from '../../infrastructure/utils/index.js'
import {checkApp} from '../validator/index.js'

log.load("TokenHasAutorizationController")
export const TokenHasAutorizationController = {
  

    async getAll(req, res, next) {
        try {
            //console.log(Hash.jwtKey())
            //console.log("----")
            //console.log(Hash.jwtKey())
            //Permission.checkGrants(req.headers['JwtToken'], req.headers['AppToken'], "api-methodo-auth")
            //console.log("----")
            //console.log(req.headers['JwtToken'])
            //console.log(req.headers['AppToken'])
            //const check = checkProduct.valid(req, res);
            //if (check.valid) {
            const authorization = await TokenHasAutorizationService.getAllAuthorizations(req.body);
            responseSuccess(responseCode.OK.code, res, responseCode.OK.msg, authorization)
            /*} else {
                responseSuccess(422, res, check.msg)
            }*/
        } catch (error) {
            next(error);
        }
    },
    async createTokenHasAutorization(req, res, next) {
        try {
            log.info('AuthorizationController:createAuthorization()')
            const authorization = await TokenHasAutorizationService.postCreateAuthorization(req.body);
            responseSuccess(responseCode.CREATE.code, res, responseCode.CREATE.msg, authorization)
        } catch (error) {
            next(error);
        }
    },
    async showTokenHasAutorization(req, res, next) {
        try {
            log.info('AuthorizationController:showAuthorization()')
            const authorization = await TokenHasAutorizationService.getShowAuthorization(req.params.id, req.body);
            responseSuccess(responseCode.CREATE.code, res, responseCode.CREATE.msg, authorization)
        } catch (error) {
            next(error);
        }
    }
}