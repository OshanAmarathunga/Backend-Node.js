import express from 'express'
import { deleteProduct, findAllProducts, findProduct, saveProduct, updateProduct } from '../controller/ProductController.js';

const router=express.Router();

router.post('/saveProduct', saveProduct);
router.put('/updateProduct/:id', updateProduct);
router.delete('/deleteProduct/:id', deleteProduct);
router.get('/findProduct/:id', findProduct);
router.get('/findAllProducts', findAllProducts);

export default router;