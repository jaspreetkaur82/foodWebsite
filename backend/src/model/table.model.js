import mongoose  from "mongoose";
const  bookingSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
require:true
    },
    phone:{
        type:String,
        require:true
      },
      date:{
        type:String,
        require:true
      },
      time:{
        type:String,
        require:true
      },
      people:{
        type:String,
        requrie:true
      },
      message:{
        type:String,
        require:true
      },


})
export const Booking=mongoose.model("Booking", bookingSchema)