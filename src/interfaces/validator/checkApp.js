import { Validator } from 'node-input-validator';
import { log, responseCode, responseSuccess } from '../../infrastructure/utils/index.js'

export const checkApp = {
 
    async validCreated(req) {

        let resp = {
            "status": true,
            "msg": "OK",
        }

        const valid = new Validator(req.body, {
            'label': 'required|string|minLength:5|maxLength:70',
            'credential': 'required|string|minLength:5|maxLength:100'
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