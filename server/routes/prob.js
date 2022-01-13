import express from 'express';

import {insertdata,getdata,getdatabydoctorid,getdatabypatientid} from '../controllers/prob.js';
import Doctor from '../models/doctor.js';

const router=express.Router();

router.post("/",insertdata);
router.get("/",getdata);
router.get("/:id",getdatabydoctorid)
router.get("/patients/:pid",getdatabypatientid);


export default router;