import Patient from '../models/patientModel.js';
import Appointment from '../models/appointmentModel.js';
import { getAllAppointments } from './appointmentController.js';
import catchAsync from '../utils/catchAsync.js';

export const createRecord = catchAsync(async (req, res, next) => {
  // 1. Find if record exist with patient name
  let patient = await Patient.findOne({ name: req.body.name });

  if (!patient) {
    req.body.firstTime = 'Yes';
    patient = await Patient.create(req.body);
  } else {
    req.body.firstTime = 'No';
  }
  // Save appointment
  req.body.patient = patient.id;
  const appointment = await Appointment.create(req.body);

  // send Response
  res.status(201).json({
    status: 'success',
    data: appointment,
  });
});

export const getAllRecords = (req, res, next) =>
  getAllAppointments(req, res, next);
