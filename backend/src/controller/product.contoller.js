
import { Product } from "../model/product.model.js";

export const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, image } = req.body;
        const newProduct = new Product({
            name,
            description,
            price,
            category,
            image,
        });
        await newProduct.save();
        res.status(201).json({ sucess: true, message: "Product  created!", product: newProduct })

    } catch (error) {
        res.status(500).json({ sucess: false, message: error.message })


    }




}
// get products

export const getProducts = async (req, res) => {

    try {

        let product = await Product.find()

        res.status(201).json({ message: "product fetched sucessfully", product })

    } catch (error) {
        res.status(500).json({ sucess: false, message: error.message })


    }


}

// delete products

export const deleteAllproducts = async (req, res) => {
    try {

        let product = await Product.deleteMany()
        res.status(201).json({ message: "products deleted sucessfully", product })

    } catch (error) {
        res.status(500).json({ sucess: false, message: error.message })


    }
}
// update products





