// Import lib native
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import { swagger } from './src/infrastructure/config/index.js'
// Import code BearerHandler,
import { ErrorHandler, UuidHandler, AuditHandler, CorsHandler, TokenBearerHandler} from './src/interfaces/middlewares/index.js';
import router from './src/interfaces/router/index.js';

const app = express();
const sess = {
  secret: 'Methodos Api Pagos',
  cookie: {},
  saveUninitialized: false,
  resave: true,
}
app.use(UuidHandler);
app.use(CorsHandler)
app.use(AuditHandler);
// Swagger
const swaggerSpec = swaggerJSDoc(swagger);
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(TokenBearerHandler);

// Use component 
app.use(express.json());
app.use(cors('*'));
app.use(session(sess));
app.use('/', router);

const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
  console.log(`App is running in port ${PORT}`);
});

// Error handlers
app.use(ErrorHandler);