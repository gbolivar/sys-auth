/**
 * @desc imports Routers
 * @version 1.0.0
 *
 */
import express from 'express';
import { MethodoRouter } from './MethodoRouter.js';
import { TokenRouter } from './TokenRouter.js';
import { AppRouter } from './AppRouter.js';
import { UsersRouter } from './UsersRouter.js';
import { AuthorizationRouter } from './AuthorizationRouter.js';
import { TokenHasAutorizationRouter } from './TokenHasAutorizationRouter.js';
import { AuthRouter } from './AuthRouter.js';

/*
*/
const router = express.Router();

TokenRouter(router);
AppRouter(router);
MethodoRouter(router);
UsersRouter(router);
AuthorizationRouter(router);
TokenHasAutorizationRouter(router);
AuthRouter(router);


export default router;