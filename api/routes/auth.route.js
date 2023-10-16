import express from 'express';

import { signup } from '../controllers/auth.contraller.js';
import { signin } from '../controllers/auth.contraller.js';


const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);


export default router;