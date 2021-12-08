import User from "../models/user.js";

export const getusers=async function(req,res){

    try {
        const allusers=await User.find();          //allstudents is array
        res.status(200).json(allusers);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}