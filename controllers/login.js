
import User from "../models/user.js";

export const loginvalidate=async function(req,res)
{
  const user=req.body;
console.log(user);
  console.log("helo ");
 
  try {
    const u= await  User.findOne({email: user.email }); 
            //u is object 
    if(user.password === u.password){
             res.send({message:"Login successsful",user:u});
            }
    else 
          res.send({message:"Invalid Details ! Please try again"});
   
} catch (error) {
    console.log(error);
}
}