import Doctor from "../models/doctor.js";
import asyncHandler from "express-async-handler";



export const getdoctors=asyncHandler(async function(req,res){

    try {
        const alldoctors=await Doctor.find();          //allstudents is array
        res.status(200).json(alldoctors);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

export const getdoctorbyid=async function(req,res){
    const id=req.params.id;
    try {
        const u=await Doctor.findOne({_id:id});          //allstudents is array
        res.status(200).json(u);
       
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
