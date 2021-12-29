import  mongoose  from "mongoose";


const docSchema=mongoose.Schema({
 
    docname:String,
    docemail:String,
    docphoto:String,
    docspec:String,
    doccontact:Number,
    docpassword:String,
    docqualification:String,
    docexperience:String
    
    
});

 const Doctor=mongoose.model('Doctor',docSchema);

//  const doc1=new Doctor({
//     docid:10000001,
//     docname:"Jack",
//     docemail:"jack26@gmail.com",
//     docphoto:"photo1.jpg",
//     docspec:"Psychiatrist",
//     doccontact:9876455254,
//     docpassword:"123",
//     docexperience:10
//  });
//  doc1.save();
 export default Doctor;