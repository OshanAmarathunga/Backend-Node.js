import express from 'express'
import { saveProduct } from '../controller/ProductController.js';

const router=express.Router();

router.post('/saveProduct', saveProduct);


export default router;