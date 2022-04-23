//import responseSuccess from '../../infrastructure/utils/SuccessHandler.js'
import { responseCode, responseSuccess, log} from '../../infrastructure/utils/index.js'


export const MethodoController = {

    async getHome(req, res, next) {
        try {
            log.info(process.env.UUID)
            const msg = "Bienvenidos al api de methodos de pagos";
            responseSuccess(responseCode.OK.code, res, msg)
        } catch (error) {
            next(error);
        }
    },

    async getInfo(req, res, next) {
        try {
            const msg = {
                "msg": "Api pagos",
                "ver": "1.0"
            };
            responseSuccess(responseCode.OK.code, res, msg)
        } catch (error) {
            next(error);
        }
    }
}