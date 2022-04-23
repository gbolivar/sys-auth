import { log } from '../../infrastructure/utils/index.js'
export const AuditHandler = function(req, res, next) {

    let old = JSON.stringify({
        "header": req.headers,
        "body": req.body
    })
    log.info(old)
    next()
};