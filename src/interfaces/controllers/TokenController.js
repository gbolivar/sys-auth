import path from 'path';
import { TokenService } from '../../application/use-cases/index.js';
import { log, responseCode, responseSuccess } from '../../infrastructure/utils/index.js'
import {checkToken} from '../validator/index.js'


log.load(path.resolve());
export const TokenController = {
  

    async getAll(req, res, next) {
        try {

            log.info('TokenController:getAll()')
            const Token = await TokenService.getAllTokens(req.body);
            responseSuccess(responseCode.OK.code, res, responseCode.OK.msg, Token)
            
        } catch (error) {
            next(error);
        }
    },
    async createToken(req, res, next) {
        try {
            const valid = checkToken.validCreated(req)
            if ((await valid).status) {
                const exist = await TokenService.postCheckUserNameAndAppCredentials(req.body['user_name'], req.body['app_credential']);
                const userId = exist[0]['user_id'];
                const appId = exist[0]['app_id'];
                if (userId > 0 && appId>0){
                    const existUAP = await TokenService.findUserIdAndAppId(userId, appId)
                    console.log(existUAP)
                    if(existUAP){
                        responseSuccess(responseCode.EXIST.code, res, responseCode.EXIST.msg, existUAP)
                    }else{
                        let dataJson = {
                            "access_token": req.body['AppHash'],
                            "user_id": userId,
                            "app_id": appId
                        }
                        const Token = await TokenService.postCreateToken(dataJson);
                        responseSuccess(responseCode.CREATE.code, res, responseCode.CREATE.msg, Token)
                    }
                    
                }
            } else {
                responseSuccess(responseCode.PRECONDITION_FAILED.code, res, (await valid).msg)
            }
        } catch (error) {
            next(error);
        }
    },
    async showToken(req, res, next) {
        try {
            log.info('TokenController:showToken()')
            const Token = await TokenService.postCheckToken(req.body);
            responseSuccess(responseCode.CREATE.code, res, responseCode.CREATE.msg, Token)
        } catch (error) {
            next(error);
        }
    }
}