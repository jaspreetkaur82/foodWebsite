import { Special } from "../model/special.model.js";
export  const createSpecial=async(req,res)=>{
    const{title,description,image,price}= req.body;

    try {
        const newSpecial= new Special({
            title,
            description,
            image,
            price
        })
        await  newSpecial.save();
        res.status(200).json({message:"Created Sucessfully!!!!",newSpecial})

        
    } catch (error) {
     res.status(400).json({message:"ERR",error})   
    }
}
export  const getSpecial=async(req,res)=>{
    try {
        let special=await  Special.find()
        res.status(200).json({message:"Data Fetched Sucessfully",special})
        
    } catch (error) {

     res.status(400).json({message:"ERR",error})     
    }
}
export const deleteAllspecials=async(req,res)=>{
    try {
        let special=await Special.deleteMany()
        res.status(200).json({message:"Data Deleted Sucessfully!!",special})
        
    } catch (error) {
        res.status(400).json({message:"ERR",error})  
    }
}
//update

