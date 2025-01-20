import express from 'express'
import { deleteProduct, findAllProducts, findLowStockProduct, findProduct, saveProduct, updateProduct } from '../controller/ProductController.js';
import verifyToken from '../middleware/Auth.js';

const router=express.Router();

router.post('/saveProduct',verifyToken(['admin','manager']), saveProduct);
router.put('/updateProduct/:id',verifyToken(['admin']), updateProduct);
router.delete('/deleteProduct/:id',verifyToken(['admin']), deleteProduct);
router.get('/findProduct/:id',verifyToken(['admin','manager','user']), findProduct);
router.get('/findAllProducts',verifyToken(['admin','manager','user']), findAllProducts);
router.get('/getLowerQtyProdust',verifyToken(['admin','manager']), findLowStockProduct);

export default router;