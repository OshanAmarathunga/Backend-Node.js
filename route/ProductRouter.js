import express from 'express'
import { saveProduct, updateProduct } from '../controller/ProductController.js';

const router=express.Router();

router.post('/saveProduct', saveProduct);
router.put('/updateProduct/:id', updateProduct);


export default router;