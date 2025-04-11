import express from "express"
import { createSpecial,getSpecial,deleteAllspecials } from "../controller/special.controller.js"
const  specialRouter= express.Router()
specialRouter.post("/special",createSpecial)
specialRouter.get("/special",getSpecial)
specialRouter.delete("/special",deleteAllspecials)


export default specialRouter