import express from 'express';

import {getdoctors,getdoctorbyid} from '../controllers/doctor.js';
import Doctor from '../models/doctor.js';

const router=express.Router();

router.get("/",getdoctors);
 router.get("/:id",getdoctorbyid);


export default router;