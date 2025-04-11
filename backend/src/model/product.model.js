import mongoose, { model } from "mongoose"
const productSchema= new mongoose.Schema({
    name:  {
        type: String,
        require:[true,"Product name is requried"]
    },
    description:{
        type: String,
        require:[true," Product Description name is requried"]
    },
    
    Price:{
        type: String,
        require:[true,"Product Price requried" ]
    },
    category :{
        type: String,
        require:[true ,"Producr Category requried"],
        enum:[ "All","Breakfast","Lunch","Dinner"]
    },
    image:{
        type:String,
    },
},
{ timestamps: true }
);
export const Product=mongoose .model("Product",productSchema)

