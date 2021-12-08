import  mongoose  from "mongoose";

const userSchema=mongoose.Schema({
    userid:Number,
    name:String,
    email:String,
    mobile:Number,
    password:String,
    age:Number
});

const User=mongoose.model('User',userSchema);
// const user1= new User({
//     userid:104,
//     name:'shivaani',
//     email:'shivaanigmail.com',
//     mobile:7675797976,
//     password:'123',
//     age:20
//   });
  
// user1.save();
export default User;