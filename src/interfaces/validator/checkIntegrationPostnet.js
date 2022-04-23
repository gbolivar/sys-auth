import { Validator } from 'node-input-validator';
import { log, responseCode, responseSuccess } from '../../infrastructure/utils/index.js'

export const checkIntegrationPostnet = {
 
    valid(req, res) {
            let isSuccess = true;
            const valid = new Validator(req.body, {
                serial: 'required|string|min:10|maxLength:150',
                id_local: 'required|integer',
                channel_id: 'required|integer',
                status:'boolean:custom(true,false)'
            });
            valid.check().then((matched) => {
                //console.log(matched)
                if (!matched) {
                    //res.status(422).send(valid.errors);
                    responseSuccess(responseCode.PRECONDITION_FAILED.code, res, valid.errors)
                    isSuccess = false;
                }
            });
            return isSuccess;
        }
}