import express from 'express';

import {insertdata,getdata,updatedata,getappointments,getpatientappointmentdetails} from '../controllers/afterconsult.js';
import Doctor from '../models/doctor.js';

const router=express.Router();

router.post("/",insertdata);
router.get("/",getdata);
router.put("/:docid/:patid",updatedata);
router.get("/:id",getappointments);
router.get("/:did/:pid",getpatientappointmentdetails);

export default router;