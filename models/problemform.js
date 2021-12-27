import  mongoose  from "mongoose";
import User from "./user.js";
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const probSchema=mongoose.Schema({
   
    name:String,
    age:Number,
    email:String,
    docid:ObjectId,
    probdesc:String,
    patient:{
        type: Schema.Types.ObjectId, ref: 'User'
    }

    
});

const Problem=mongoose.model('Problem',probSchema);

const newproblem = new Problem({
    name:"Shirley",
    age:20,
    email:"shirley@gmail.com",
    docid:"5fd21f60d230812954b4b49b",
    probdesc:"Studey tension",
    patient:{
        patientprofile:"/images/user1.jpeg",
        contact:998979799
    }

});
newproblem.save();
export default Problem;