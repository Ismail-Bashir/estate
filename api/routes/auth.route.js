import express from 'express';

import { signup } from '../controllers/auth.contraller.js';


const router = express.Router();

router.post("/signup", signup);

export default router;