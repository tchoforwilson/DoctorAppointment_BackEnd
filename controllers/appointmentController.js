import Appointment from '../models/appointmentModel.js';
import * as factory from './handleFactory.js';

export const getAllAppointments = factory.getAll(Appointment);
export const getAppointment = factory.getOne(Appointment);
export const createAppointment = factory.createOne(Appointment);
export const updateAppointment = factory.updateOne(Appointment);
export const deleteAppointment = factory.deleteOne(Appointment);