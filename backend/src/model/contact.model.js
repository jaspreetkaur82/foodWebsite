import mongoose from "mongoose";
const  contactSchema= new mongoose.Schema({
name:
{
    type:String,
    require: true
},
email:{
    type:String,
    require:true
},
subject:
{
    type:String,
    require:true
},
message:{
    type:String,
    require:true
}

})
export const Contact=mongoose.model("contact",contactSchema)
