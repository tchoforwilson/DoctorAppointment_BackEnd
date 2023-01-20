import { Router } from 'express';
import * as appointmentController from '../controllers/appointmentController.js';

const router = Router();

router.route("/").post(appointmentController.createAppointment).get(appointmentController.getAllAppointments);
router.route("/:id").get(appointmentController.getAppointment).patch(appointmentController.updateAppointment).delete(appointmentController.deleteAppointment);

export default router;