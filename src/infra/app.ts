import 'dotenv/config';
import 'reflect-metadata';

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

import './container';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(cors());
app.use(helmet());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routes);

export { app };
