import Product from '../model/ProductSchema.js'

export async function saveProduct(req,res){
    try {
        const newProduct=new Product(req.body);
        const savedProduct=await newProduct.save();

        res.status(200).json({
            messsage:"Product save success!",
            data:savedProduct
        })
    } catch (e) {
        res.status(500).json({
            errorMessage:e.message
        })
    }
}