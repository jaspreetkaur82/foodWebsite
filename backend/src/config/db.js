import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MONGODB_URL);

export const connectDb=async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
      console.log("connected to db")
    })
    
  } catch (error) {
    console.log("database connection err",error)
    
  }
}