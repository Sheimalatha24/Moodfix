import express from 'express';
import { dloginvalidate} from '../controllers/dlogin.js';


const router=express.Router();
router.get('/',function(req,res){
    res.send("hello");
});
router.post('/',dloginvalidate);

export default router;