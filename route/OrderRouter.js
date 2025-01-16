import express from 'express';
import { changeOrderStatus, deleteOrder, findOrderById, saveOrder, updateOrder } from '../controller/OrderController.js';

const router=express.Router();

router.post('/saveOrder',saveOrder);
router.put('/updateOrder:id', updateOrder);
router.put('/changeOrderStatus:id', changeOrderStatus);
router.delete('/deleteOrder:id', deleteOrder);
router.get('findOrderById:id',findOrderById );


export default router;