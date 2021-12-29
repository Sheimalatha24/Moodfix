import  mongoose  from "mongoose";

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const probSchema=mongoose.Schema({
   
    name:String,
    age:Number,
    email:String,
  patient:{
        type: mongoose.Schema.Types.ObjectId,
         ref: 'User'
    },
    
    docid:ObjectId,
    probdesc:String,
  

    
});

const Problem=mongoose.model('Problem',probSchema);

// const newproblem = new Problem({
//     name:"Shirley",
//     age:20,
//     email:"shirley@gmail.com",
//     docid:"5fd21f60d230812954b4b49b",
//     probdesc:"Studey tension",
//     patient :{
        
//         patientprofile:"images/user2.jpeg"
//     }

// });
// newproblem.save();
export default Problem;