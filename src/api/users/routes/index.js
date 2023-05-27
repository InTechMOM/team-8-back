import express from 'express';
import createUser from '../controllers/post.js';

const router = express.Router();

router.post('/users', createUser);

export default router;