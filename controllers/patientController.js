import Patient from '../models/patientModel.js';
import * as factory from './handleFactory.js';

export const getAllPatients = factory.getAll(Patient);
export const getPatient = factory.getOne(Patient);
export const createPatient = factory.createOne(Patient);
export const updatePatient = factory.updateOne(Patient);
export const deletePatient = factory.deleteOne(Patient);