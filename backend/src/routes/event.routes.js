import express from "express"
import { createEvent,getEvent,deleteAllevents } from "../controller/event.controller.js"

const eventRouter=express.Router()


eventRouter.post("/event",createEvent)
eventRouter.get("/event",getEvent)
eventRouter.delete("/event",deleteAllevents)


export default eventRouter





