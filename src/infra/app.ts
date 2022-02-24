import 'dotenv/config';
import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import cors from 'cors';
import { errors as celebrateErrors } from 'celebrate';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

import './container';
import { run as mongoConnection } from './database/mongodb';
import { routes } from './routes';
import { startJob } from '../articles/job';

mongoConnection();
const app = express();

app.use(express.json());

app.use(helmet());
app.use(cors({ origin: '*' }));
startJob();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routes);

app.use(celebrateErrors());
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'Error',
      message: 'Internal server error',
    });
  }
);

export { app };
