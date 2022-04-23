import { AppService } from '../../application/use-cases/index.js';
import { log, responseCode, responseSuccess, Permission } from '../../infrastructure/utils/index.js'
import { checkApp } from '../validator/index.js'

log.load("AppController")
export const AppController = {


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
            const app = await AppService.getAllApps(req.body);
            responseSuccess(responseCode.OK.code, res, responseCode.OK.msg, app)
            /*} else {
                responseSuccess(422, res, check.msg)
            }*/
        } catch (error) {
            next(error);
        }
    },
    async createApp(req, res, next) {
        try {
            log.info('AppController:createApp()')
            console.log(req.body)
            let valid = checkApp.validCreated(req);

            if ((await valid).status) {
                const User = await AppService.findExtisRows(req.body.label, req.body.credential);
                if (User.length > 0) {
                    responseSuccess(responseCode.EXIST.code, res, responseCode.EXIST.msg, User)
                } else {
                    const User = await AppService.postCreateApp(req.body);
                    responseSuccess(responseCode.CREATE.code, res, responseCode.CREATE.msg, User)
                }

            } else {
                responseSuccess(responseCode.PRECONDITION_FAILED.code, res, (await valid).msg)
            }

        } catch (error) {
            next(error);
        }
    },
    async showApp(req, res, next) {
        try {
            log.info('AppController:showApp()')
            const app = await AppService.getShowApp(req.params.id, req.body);
            responseSuccess(responseCode.CREATE.code, res, responseCode.CREATE.msg, app)
        } catch (error) {
            next(error);
        }
    }
}