import { Validator } from 'node-input-validator';
import { log, responseCode, responseSuccess } from '../../infrastructure/utils/index.js'

export const checkToken = {
 
    async validCreated(req) {

        let resp = {
            "status": true,
            "msg": "OK",
        }

        const valid = new Validator(req.body, {
            'user_name': ['required', 'regex:^([a-zA-Z-_])+$', 'maxLength:70'],
            'app_credential': ['required', 'regex:^([a-zA-Z-_])+$', 'maxLength:70']

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