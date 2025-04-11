import mongoose from "mongoose";
const  eventSchema=new mongoose.Schema({
title:{
    type:String,
    require:true
},
image:{
    type:String,
    require:true
},
location:{
    type:String,
    require:true
},
date:{
    type:String,
    require:true
},

})
export const Event =mongoose.model("event",eventSchema)