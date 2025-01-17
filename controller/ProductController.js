import Product from "../model/ProductSchema.js";

export async function saveProduct(req, res) {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();

    res.status(200).json({
      messsage: "Product save success!",
      data: savedProduct,
    });
  } catch (e) {
    res.status(500).json({
      errorMessage: e.message,
    });
  }
}

export async function updateProduct(req, res) {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    if (updatedProduct) {
      return res.status(200).json({
        message: "Product updated!",
        data: updatedProduct,
      });
    }

    res.status(404).json({
      message: "Product not found!",
    });
  } catch (e) {
    res.status(500).json({
      errorMessage: e.message,
    });
  }
}

export async function deleteProduct(req, res) {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (deletedProduct) {
      return res.status(200).json({
        message: "Product delete success!",
        data: deletedProduct,
      });
    }

    res.status(404).json({
      message: "Product not found!",
    });
  } catch (e) {
    res.status(500).json({
      errorMessage: e.message,
    });
  }
}

export async function findProduct(req,res){
    try {
       const getProduct= await Product.find(req.params.id);

       if(getProduct){
        return res.status(200).json({
            message:"Product found",
            data:getProduct
        })
       }

       res.status(404).json({
        messsage:"Product not found"
       })
        
    } catch (e) {
        res.status(500).json({
            errorMessage: e.message,
          });
    }
}

