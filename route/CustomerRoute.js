import express from 'express'
import { saveCustomer, updateCustomer } from '../controller/CustomerController.js';

const router=express.Router();

router.post('/saveCustomer', saveCustomer);
router.put('/updateCustomer',updateCustomer);


export default router;
