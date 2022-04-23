// params need to be in order 
import { IntegrationService } from '../../domain/services/index.js';
import { responseCode, responseSuccess, log } from '../../infrastructure/utils/index.js'
export const BearerHandler = (req, res, next) => {
    const token = req.headers['authorization'];
    if(typeof token != 'undefined'){
        const bearer = token.split(' ');
        const bearerName = bearer[0];
        const bearerToken = bearer[1];

        const exist = IntegrationService.getByToken(bearerToken);

        exist.then((data) => {
            if (data.length > 0) {
                process.env.WOO_URL=data[0].url_api;
                process.env.WOO_CLIENT=data[0].cliente_id;
                process.env.WOO_SECRET=data[0].secret;
                next()
            } else {
                responseSuccess(responseCode.FORBIDDEN.code, res, responseCode.FORBIDDEN.msg)
            }
        })
        
    }else{
        res.sendStatus(403)
    }
    
    /*return res.status(err.status || 400).json({
        isSuccess: false,
        message: err.message || 'Unknown error happened'
    });*/
};