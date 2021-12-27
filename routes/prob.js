import express from 'express';

import {insertdata,getdata,getdatabyid} from '../controllers/prob.js';
import Doctor from '../models/doctor.js';

const router=express.Router();

router.post("/",insertdata);
router.get("/",getdata);
router.get("/:id",getdatabyid)


export default router;