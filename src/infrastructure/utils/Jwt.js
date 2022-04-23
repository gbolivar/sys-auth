import jwt, { decode } from "jsonwebtoken";
/**
 * Author Gregorio Bolivar <elalconxvii@gmail.com>
 * Version 1.0.1
 * Description: Module for Jwt
 * Create: 2021-12-14 10:14
 * last update: 2021-12-14 00:14
 */
var payload = { foo: 'bar' };
var secret = 'xxx';
export const Jwt = {
    sign(content, privateKey) {
        try {
            return jwt.sign(content, privateKey, { expiresIn: '1h', algorithm: 'HS512' });
        } catch (error) {
            console.log("ERROR")
        }

    },
    verify(tokenJwt, privateKey){
        return jwt.verify(tokenJwt, privateKey, { algorithm: 'HS512' });

    },
    decode(tokenJwt){
        return jwt.verify(tokenJwt, { complete: true });

    }

}