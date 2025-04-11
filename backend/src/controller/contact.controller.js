import { Contact } from "../model/contact.model.js";
export const createContact = async (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        const newContact = new Contact({


            name,
            email,
            subject,
            message
        })
        await newContact.save()
        res.status(201).json({ message: "contact created sucessfully", newContact })


    } catch (error) {
        res.status(400).json({ message: "ERR", error })

    }
}
//get method
export const getContact = async (req, res) => {
    try {
        let contact = await Contact.find()
        res.status(201).json({ message: "Contact fetched sucessfully!!", contact })

    } catch (error) {
        res.status(400).json({ message: "ERR", error: error.message })

    }

}
export const deleteAllcontacts = async (req, res) => {
    try {
        let contact = await Contact.deleteMany()
        res.status(201).json({ message: "Deleted Successfully!!!!", contact })

    } catch (error) {
        res.status(400).json({ message: "ERR", error })


    }
}



