import { v4 as uuidv4 } from 'uuid';

export const UuidHandler = function(req, res, next) {
    const uuid = req.headers['uuid'] || uuidv4();
    process.env.UUID = uuid
    process.setMaxListeners(0)
    next()
};