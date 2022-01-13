import express from 'express';
import { getappointments } from '../controllers/afterconsult.js';

import {getdoctors,getdoctorbyid,getdoctorappointments} from '../controllers/doctor.js';
import Doctor from '../models/doctor.js';

const router=express.Router();

router.get("/",getdoctors);
 router.get("/:id",getdoctorbyid);

 router.get('/docs/:docid',getdoctorappointments);

export default router;