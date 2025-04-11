import { Event } from "../model/event.model.js";
 export const createEvent= async(req,res)=>{
    const {title,image, location,date,}=req.body;
    try {
        let newEvent= new Event({
            title,
            image,
            location,
            date,

        })
        await newEvent.save()
        res.status(201).json({message:"Creatd Succesfully", newEvent})

        
        
    } catch (error) {
        res.status(400).json({message:"ERR",error})
    }
 }
 // get //
 export  const getEvent= async(req,res)=>{
    try {
        let  event= await Event.find()
        res.status(201).json({message:" Event fetched Succesfully",event })


    } catch (error) {
        res.status(400).json({message:"ERR",error})
        
    }

 }
//  delete events
// Delete all events
export const deleteAllevents=async(req,res)=>{
    try {
        let event=await Event.deleteMany()
        res.status(201).json({message:"Delted Sucessfully",event})
        
    } catch (error) {
        res.status(400).json({message:"ERR",error})
    }
}

  // updated 

  

 
  



