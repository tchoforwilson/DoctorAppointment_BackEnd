import express from 'express';
import morgan from 'morgan';

import AppError from './utils/appError.js';
import globalErrorHandler from './controllers/errorController.js';

import patientRouter from './routes/patientRoutes.js';
import appointmentRouter from './routes/appointmentRoutes.js';
import recordRouter from './routes/recordRoutes.js';

const app = express();

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ROUTES
app.use('/api/hospital/records', recordRouter);
app.use('/api/hospital/patients', patientRouter);
app.use('/api/hospital/appointments', appointmentRouter);

// Invalid route
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);


export default app;

