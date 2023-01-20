import { Router } from 'express';
import * as patientController from '../controllers/patientController.js';

const router = Router();

router.route("/").post(patientController.createPatient).get(patientController.getAllPatients);
router.route("/:id").get(patientController.getPatient).patch(patientController.updatePatient).delete(patientController.deletePatient);

export default router;