import mongoose from "mongoose";
const specialSchema= new  mongoose.Schema({
title:
{
    type:String,
    require:true
},
description:
{
    type:String,
    require:true 
},
image:
{
    type:String,
    require:true 
},
price:{
    type:String,
    require:true 

}

})
export  const Special=mongoose.model("Special", specialSchema)



