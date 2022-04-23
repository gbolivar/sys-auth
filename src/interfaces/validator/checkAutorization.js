import { Validator } from 'node-input-validator';
import { log, responseCode, responseSuccess } from '../../infrastructure/utils/index.js'

export const checkAutorization = {
 
    async validCreated(req) {

        let resp = {
            "status": true,
            "msg": "OK",
        }

        const valid = new Validator(req.body, {
            'app_credential': ['required', 'regex:^([\w-])+$', 'maxLength:70'],
            'grant': ['required', 'regex:^([a-zA-Z-_])+$', 'maxLength:70']

        })

        const matched = await valid.check();

        if (!matched) {
            resp = {
                "status": matched,
                "msg": valid.errors,
            }
        }
        return resp

    }
}