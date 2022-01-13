import Problem from "../models/problemform.js";

import User from "../models/user.js";

export const insertdata= async function (req,res) {
    const probsdata=req.body;
    const newproblem=new Problem(probsdata);
    try {
             newproblem.save();
             res.status(200).json(newproblem);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}

export const getdata=async function(req,res){

    try {
        const alldatas=await Problem.find().populate("patient","name mobile email patientprofile age type");
        // const allpatientpics= await User.find({email:})          //allstudents is array
        res.status(200).json(alldatas);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
};
export const getdatabydoctorid=async function(req,res){
    const id=req.params.id;
    try {
        const u=await Problem.find({docid:id}).populate("patient","name mobile email patientprofile age type");;          //allstudents is array
        res.status(200).json(u);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const getdatabypatientid=async function(req,res){
    const pid=req.params.pid;
    try {
        const u=await Problem.findOne({patient:pid}).populate("patient","name mobile email patientprofile age type");;          //allstudents is array
        res.status(200).json(u);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
