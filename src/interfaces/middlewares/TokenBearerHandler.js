
import path from 'path';
import { TokenService } from '../../domain/services/index.js';
import { responseCode, responseSuccess, log, Cache, Jwt } from '../../infrastructure/utils/index.js'
import { checkBearerToken } from '../validator/index.js'

export const TokenBearerHandler = (req, res, next) => {
    

    log.load(path.resolve());
    log.info('Load vars request headers')
    const token = req.headers['authorization'] || 'Bearer   ';
    const secret = req.headers['secret'];
    const bearerToken = token.split(' ')[1];

    log.info('Checking Header Validator')

    let valid = checkBearerToken.validHeader({ 'secret': secret, 'authorization': bearerToken, 'contentType': req.headers['content-type']});
    valid.then( (valid) => {
        log.info(JSON.stringify(valid.msg))
        if (valid.status) {
        
            if (typeof token != 'undefined') {
                
                const exist = TokenService.getByToken(bearerToken, secret);


                exist.then((data) => {
                    if (data.length > 0) {
                        let grants = data[0]['grants'];
                        let appToken = data[0]['app_token'];
                        let credential = data[0]['credential'];
                        
                        let JwtToken = Jwt.sign({ "credential": credential, "grants": grants, 'client': { "name": data[0]['name'], "idx": parseInt(data[0]['user_id'])} }, appToken)
                        Cache.put("JwtToken", JwtToken);
                        Cache.put("AppToken", appToken);
                        req.headers['JwtToken'] = JwtToken
                        req.headers['AppToken'] = appToken
                        //Cache.put(token, data);
                        //console.log(Cache.get(token))
                        next()
                    } else {
                        responseSuccess(responseCode.FORBIDDEN.code, res, responseCode.FORBIDDEN.msg)
                    }
                })

            } else {
                responseSuccess(responseCode.FORBIDDEN.code, res, responseCode.FORBIDDEN.msg)
            }
        } else {
            responseSuccess(responseCode.PRECONDITION_FAILED.code, res, valid.msg)
        }
    })
};