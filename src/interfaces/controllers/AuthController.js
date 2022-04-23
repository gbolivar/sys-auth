import { log, responseCode, responseSuccess, Permission } from '../../infrastructure/utils/index.js'

log.load("AuthController")
export const AuthController = {


    async postAuth(req, res, next) {
        try {
           
            //Permission.checkGrants(req.headers['JwtToken'], req.headers['AppToken'], "api-methodo-auth")
           
            const jwt = req.headers['JwtToken'];
            responseSuccess(responseCode.OK.code, res, responseCode.OK.msg, jwt)
            
        } catch (error) {
            next(error);
        }
    }
}