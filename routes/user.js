import express from 'express';

import {getusers,getbyid} from '../controllers/user.js';
import User from '../models/user.js';

const router=express.Router();

router.get("/",getusers);
router.get("/:id",getbyid);


export default router;