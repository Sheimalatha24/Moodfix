import mongoose from 'mongoose';
import User from '../models/user.js';
import Doctor from '../models/doctor.js';
import Problem from '../models/problemform.js';
 const connectDB = async () => {
    try {
        //database Name
    
        const con = await mongoose.connect(`mongodb://127.0.0.1:27017/mentalDB`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true
    });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}
export default connectDB;
