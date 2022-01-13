
import User from "../models/user.js";

export const pregistervalidate=async function(req,res)
{
  const user=req.body;

 
  try {
    const u= new User(user);
          u.save();
          res.send({message:"Successfully Registered"})
   
   
} catch (error) {
    console.log(error);
}
}