import { UserService } from '../../application/use-cases/index.js';
import { log, responseCode, responseSuccess, Permission} from '../../infrastructure/utils/index.js'
import { checkUser } from '../validator/index.js'

log.load("UserController")
export const UserController = {
  

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
            const User = await UserService.getAllUsers(req.body);
            responseSuccess(responseCode.OK.code, res, responseCode.OK.msg, User)
            /*} else {
                responseSuccess(422, res, check.msg)
            }*/
        } catch (error) {
            next(error);
        }
    },
    async createUser(req, res, next) {
        try {
            let valid = checkUser.validCreated(req);
            log.info('UserController:createUser()')
            if ((await valid).status) {
                const User = await UserService.getShowUser(req.body.name);
                if (User.length > 0) {
                    responseSuccess(responseCode.EXIST.code, res, responseCode.EXIST.msg, User)
                } else {
                    const User = await UserService.postCreateUser(req.body);
                    responseSuccess(responseCode.CREATE.code, res, responseCode.CREATE.msg, User)
                }
                
            }else{
                responseSuccess(responseCode.PRECONDITION_FAILED.code, res, (await valid).msg)
            }
        } catch (error) {
            next(error);
        }
    },
    async showUser(req, res, next) {
        try {
            log.info('UserController:showUser()')
            const User = await UserService.getShowUser(req.params.name);
            responseSuccess(responseCode.CREATE.code, res, responseCode.CREATE.msg, User)
        } catch (error) {
            next(error);
        }
    }
}