/**
 * Author Gregorio Bolivar <elalconxvii@gmail.com>
 * Version 1.0.1
 * Description: Module for generate Hash
 * Create: 2021-12-01 14:14
 * last update: 2021-12-15 12:14
 */
import crypto from 'crypto';
import nodeBase64 from 'nodejs-base64-converter'
export const Hash = {
    sha512(msg){
        let hash = crypto.createHash('sha512');
        let dat = msg | Math.floor(new Date().getTime()) + Math.floor(Math.random() * 1000);
        let tm = String(dat);
        let data = hash.update(tm, 'utf-8');
        let gen_hash = data.digest('hex');
        return gen_hash;
    },
    jwtKey(){
        return nodeBase64.encode(Hash.sha512());
    }
}