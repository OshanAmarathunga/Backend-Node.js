import express from 'express';
import { signup } from '../controller/UserController.js';

const router=express.Router();

router.post('signUpUser', signup);

export default router;