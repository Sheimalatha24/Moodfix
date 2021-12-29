
import Doctor from "../models/doctor.js";

export const dloginvalidate=async function(req,res)
{
  const doctor=req.body;
console.log(doctor);
  console.log("helo ");
 
  try {
    const u= await  Doctor.findOne({docemail: doctor.email }); 
            //u is object 
    if(doctor.password === u.docpassword){
             res.send({message:"Login successsful",user:u});
            }
    else 
          res.send({message:"Invalid Details ! Please try again"});
   
} catch (error) {
    console.log(error);
}
}