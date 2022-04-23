import { responseCode, responseSuccess, log, Cache, Jwt } from '../../infrastructure/utils/index.js'
/**
 * Author Gregorio Bolivar <elalconxvii@gmail.com>
 * Version 1.0.1
 * Description: Module for Permission
 * Create: 2021-12-22 10:14
 * last update: 2021-12-23 00:14
 */

export const Permission = {
    checkApp(tokenJwt, privateKey, permisionAsToken) {
            let valid = false
            let rows = Jwt.verify(tokenJwt, privateKey);
            if (rows['credential'] == permisionAsToken) {
                valid = true
            }
            return valid

    },
    checkGrants(tokenJwt, privateKey, permisionAsToken) {
            
        
            let rows = Jwt.verify(tokenJwt, privateKey);
            let valid = false;
            rows['grants'].forEach(item => {
                if (item == permisionAsToken) {
                    valid = true;
                    return valid;
                }
            });
            return valid;
            
    }

}