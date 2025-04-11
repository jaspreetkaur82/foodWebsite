import express from "express";
import { createContact,getContact,deleteAllcontacts} from "../controller/contact.controller.js"
 const contactRouter= express.Router()
 contactRouter.post("/contact",createContact)
 contactRouter.get("/contact",getContact)
 contactRouter.delete("/contact",deleteAllcontacts)

 export default contactRouter

