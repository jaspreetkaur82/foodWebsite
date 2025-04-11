

import { Booking } from "../model/table.model.js";
export const createTable = async (req, res) => {

    let { name, email, phone, date, time, people, message } = req.body;

    try {
        let newTable = new Booking({
            name,
            email,
            phone,
            date,
            time,
            people,
            message

        })

        await newTable.save()
        res.status(201).json({ message: "table created sucessfully", newTable })


    } catch (error) {
        res.status(500).json({ message: "ERR:", error })

    }







}


export const getTable=async(req,res)=>{


    try {
        let booking=await Booking.find()
        res.status(201).json({message:"booking fetched successfully",booking})
        
    } catch (error) {
        res.status(500).json({ message: "ERR:", error })

        
    }
}
export const deleteAllTables=async(req,res)=>{
    try {
        let booking= await Booking.deleteMany()
        res.status(200).json({message:"Deleted Sucessfully!!!!"})
        
    } catch (error) {
        res.status(500).json({ message: "ERR:", error })
    }
}