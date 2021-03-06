// vendors
import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';

// config
import updateConfig from './config/upload';

// errors
import AppError from './errors/AppErros';

// routes
import routes from './routes';

// database
import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(updateConfig.directory));
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    console.error(error);
    return response.status(500).json({
      status: 'error',
      message: 'internal server errors',
    });
  }
);

app.listen(3333, () => {
  console.log('🔥 The server started !!! 🚀 ');
});
