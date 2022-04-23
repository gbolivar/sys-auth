import { Validator } from 'node-input-validator';



export const checkUser = {
 
    async validCreated(req) {

        let resp = {
            "status": true,
            "msg": "OK",
        }
       
        const valid = new Validator(req.body, {
            'name': 'required|string|minLength:5|maxLength:70'
        })

        const matched = await valid.check();

        if(!matched) {
            resp = {
                "status": matched,
                "msg": valid.errors,
            }
        }
        return resp
        
    }

    
}