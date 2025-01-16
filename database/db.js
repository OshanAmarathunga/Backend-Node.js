import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const url=process.env.MONGO_URL;

export async function DBConnection() {
    try{
      const resp= await mongoose.connect(url);
      console.log("DB connected succesfully !");
      
    }catch(e){
        console.log("DB error : ",e);
        
    }
}

// export function DBConnection(){
//     mongoose.connect(url).then((rsp)=>{
//         console.log("DB connected succesfully !");
         
//     }).catch((e)=>{
//         console.log("DB connection error : ",e);
//     })
// }