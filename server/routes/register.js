import express from 'express';
import { pregistervalidate} from '../controllers/register.js';


const router=express.Router();
router.get('/',function(req,res){
    res.send("hello");
});
router.post('/',pregistervalidate);

export default router;