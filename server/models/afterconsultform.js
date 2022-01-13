import  mongoose  from "mongoose";


const afterconsultSchema=mongoose.Schema({
 
   type:String,
   visitnumber:Number,
   dateofvisit:String,
   time:String,
   problemstated:String,
   advicegiven:String,
   dateofnextvisit:String,
   improvementscale:String,
   badge:String,
   consultationfee:Number,
doc:{
    type: mongoose.Schema.Types.ObjectId,
         ref: 'Doctor'
},
patient:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}

    
});

 const Afterconsult=mongoose.model('Afterconsult',afterconsultSchema);

 export default Afterconsult;