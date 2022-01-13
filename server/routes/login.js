import express from 'express';
import { ploginvalidate} from '../controllers/login.js';


const router=express.Router();
router.get('/',function(req,res){
    res.send("hello");
});
router.post('/',ploginvalidate);

export default router;