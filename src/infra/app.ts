import 'dotenv/config';
import 'reflect-metadata';

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import './container';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(cors());
app.use(helmet());

app.use(routes);

export { app };
