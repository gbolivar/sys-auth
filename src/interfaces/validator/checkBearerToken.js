import { Validator } from 'node-input-validator';
export const checkBearerToken = {
 
    async validHeader(heade) {

        let resp = {
            "status": true,
            "msg": "OK",
        }

        const valid = new Validator(heade, {
            'secret': 'required|string|hash:sha512',
            'contentType':'required|equals:application/json',
            'authorization':'required|string|hash:sha512'
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