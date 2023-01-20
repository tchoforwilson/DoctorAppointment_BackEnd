import { Router } from 'express';
import { createRecord, getAllRecords } from '../controllers/recordController.js';

const router = Router();

router.route("/").post(createRecord).get(getAllRecords);

export default router;