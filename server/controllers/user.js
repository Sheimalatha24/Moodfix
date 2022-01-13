import User from "../models/user.js";
import asyncHandler from "express-async-handler";
export const getusers=asyncHandler(async function(req,res){

    try {
        const allusers=await User.find();          //allstudents is array
        res.status(200).json(allusers);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});


export const getbyid=asyncHandler(async function(req,res){

    const id =req.params.id;
    try {
        const user=await User.findOne({_id:id});         
        res.status(200).json(user);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});