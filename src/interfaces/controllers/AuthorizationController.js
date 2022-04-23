import { AuthorizationService, AppService } from '../../application/use-cases/index.js';
import { log, responseCode, responseSuccess, Permission} from '../../infrastructure/utils/index.js'
import { checkAutorization} from '../validator/index.js'

log.load("AuthorizationController")
export const AuthorizationController = {
  
 
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
            const authorization = await AuthorizationService.getAllAuthorizations(req.body);
            responseSuccess(responseCode.OK.code, res, responseCode.OK.msg, authorization)
            /*} else {
                responseSuccess(422, res, check.msg)
            }*/
        } catch (error) {
            next(error);
        }
    },
    async createAuthorization(req, res, next) {
        try {
            // checking input parameters body
            const valid = checkAutorization.validCreated(req)
            if ((await valid).status) {
                // checking exits credential 
                const exist = await AppService.findCredential(req.body['app_credential']);
                if(exist) {
                    // Vars static
                    let appId = exist[0]['id'];
                    let grant =  req.body['grant'];
                    // Find exits 
                    const check = await AuthorizationService.findAppIdAndGrant(appId, grant)
                    if (check.length > 0) {
                        responseSuccess(responseCode.EXIST.code, res, responseCode.EXIST.msg, check)
                    } else {
                        const authorization = await AuthorizationService.postCreateAuthorization(appId, grant);
                        responseSuccess(responseCode.CREATE.code, res, responseCode.CREATE.msg, authorization)
                    }
                }else{
                    responseSuccess(responseCode.PRECONDITION_FAILED.code, res, { "message":"app_credential not valid"})
                }
            } else {
                responseSuccess(responseCode.PRECONDITION_FAILED.code, res, (await valid).msg)
            }
        } catch (error) {
            next(error);
        }
    },
    async showAuthorization(req, res, next) {
        try {
            log.info('AuthorizationController:showAuthorization()')
            const authorization = await AuthorizationService.getShowAuthorization(req.params.id, req.body);
            responseSuccess(responseCode.CREATE.code, res, responseCode.CREATE.msg, authorization)
        } catch (error) {
            next(error);
        }
    },
    async getAuthorizationForAppCredential(req, res, next) {
        try {
            log.info('AuthorizationController:getAuthorizationForAppCredential()')
            const exist = await AppService.findCredential(req.params.appCredential);
            if (exist.length > 0) {
                const authorization = await AuthorizationService.getAuthorizationForAppCredential(exist[0].id);
                if (authorization.length > 0) {
                    responseSuccess(responseCode.OK.code, res, responseCode.OK.msg, authorization)
                } else {
                    responseSuccess(responseCode.NO_CONTENT.code, res, responseCode.NO_CONTENT.msg, exist)
                }
            } else {
                responseSuccess(responseCode.NO_CONTENT.code, res, responseCode.NO_CONTENT.msg, exist)
            }
            
        } catch (error) {
            next(error);
        }
    }
}