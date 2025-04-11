import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDb } from "./src/config/db.js"
import userRouter from "./src/routes/user.routes.js"
import proudctRouter from "./src/routes/product.routes.js"
import eventRouter from "./src/routes/event.routes.js"
import contactRouter from "./src/routes/contact.routes.js"
import bookRouter from "./src/routes/book.routes.js"
import specialRouter from "./src/routes/special.routes.js"
dotenv.config()








const app = express()





//middleware


app.use(cors())
app.use(express.json())

app.use("/api",userRouter)
app.use("/api",proudctRouter)
app.use("/api",eventRouter)
app.use("/api",contactRouter)
app.use("/api",bookRouter)
app.use("/api",specialRouter)


















const port = process.env.PORT|| 8080


connectDb()

app.listen(port, () => {
    console.log("app is running on port", port)
})