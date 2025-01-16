import express from 'express';
import { changeOrderStatus, deleteOrder, findOrderById, getAllOrders, saveOrder, updateOrder } from '../controller/OrderController.js';

const router=express.Router();

router.post('/saveOrder',saveOrder);
router.put('/updateOrder/:id', updateOrder);
router.put('/changeOrderStatus/:id', changeOrderStatus);
router.delete('/deleteOrder/:id', deleteOrder);
router.get('findOrderById/:id',findOrderById );
router.get('getAllOrders', getAllOrders);


export default router;