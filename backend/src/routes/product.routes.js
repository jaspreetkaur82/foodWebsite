import express from "express"
import { createProduct,getProducts,deleteAllproducts } from "../controller/product.contoller.js"


const proudctRouter=express.Router()
proudctRouter.post("/products",createProduct)
proudctRouter.get("/products",getProducts)
proudctRouter.delete("/products",deleteAllproducts)

export  default proudctRouter