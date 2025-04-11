import express from "express"
import { createTable,getTable,deleteAllTables } from "../controller/book.controller.js"

const bookRouter= express.Router()
bookRouter.post("/book",createTable)
bookRouter.get("/book",getTable)
bookRouter.delete("/book",deleteAllTables)
export default bookRouter




