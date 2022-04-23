import { log } from '../../infrastructure/utils/index.js'
export const CorsHandler = function(req, res, next) {
    log.info("Cors")
    next()
};