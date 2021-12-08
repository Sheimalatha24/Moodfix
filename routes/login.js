import express from 'express';
import { loginvalidate} from '../controllers/login.js';


const router=express.Router();
router.get('/',function(req,res){
    res.send("hello");
});
router.post('/',loginvalidate);

export default router;