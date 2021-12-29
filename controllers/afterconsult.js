import Afterconsult from "../models/afterconsultform.js";


export const insertdata= async function (req,res) {
    const consultdata=req.body;
    const newconsult=new Afterconsult(consultdata);
    try {
             newconsult.save();
             res.status(200).json(newconsult);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}


export const getdata=async function(req,res){

    try {

        const alldatas=await    Afterconsult.find().populate("patient doc","name mobile email patientprofile age type").populate("doc");
        // const allpatientpics= await User.find({email:})          //allstudents is array
        res.status(200).json(alldatas);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
};



export const getpatientappointmentdetails=async function(req,res){
      
    const pp_id=req.params.pid;
    
    const dd_id=req.params.did;
    try {

        const alldatas=await Afterconsult.findOne({doc:dd_id,patient:pp_id}).populate("patient","name mobile email patientprofile age type");
        // const allpatientpics= await User.find({email:})          //allstudents is array
        res.status(200).json(alldatas);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
};


export const getappointments=async function(req,res){
const d_id=req.params.id;
const date=new Date().toISOString().slice(0, 10);
    try {

        const alldatas=await  Afterconsult.find({doc:d_id,dateofnextvisit:date}).populate("patient","name mobile email patientprofile age type");
        // const allpatientpics= await User.find({email:})          //allstudents is array
        res.status(200).json(alldatas);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
};


export const updatedata= async function(req,res){
    const d_id=req.params.docid;
    const p_id=req.params.patid;

    const formbody=req.body;       //student object
    
    try {
       await Afterconsult.findOneAndUpdate({doc:d_id,patient:p_id},{
           
      type:formbody.type,
      visitnumber:formbody.visitnumber,
      dateofvisit:formbody.dateofvisit,
      time:formbody.time,
      problemstated:formbody.problemstated,
      advicegiven:formbody.advicegiven,
      dateofnextvisit:formbody.dateofnextvisit,
      improvementscale:formbody.improvementscale,
    consultationfee:formbody.consultationfee,
    doc:formbody.doc,
    patient:formbody.patient
           
        })
        res.status(201).json({message:"Updated"});
    //   
    } catch (error) {
        res.status(409).json({message:error.message});
    }


}
