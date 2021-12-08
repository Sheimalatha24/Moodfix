import express from 'express';

import {getusers} from '../controllers/user.js';
import User from '../models/user.js';

const router=express.Router();

router.get("/",getusers);



export default router;