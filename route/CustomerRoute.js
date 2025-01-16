import express from 'express'
import { saveCustomer } from '../controller/CustomerController.js';

const router=express.Router();

router.get('/getAllCustomers', saveCustomer);


export default router;
