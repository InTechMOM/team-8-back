import express from 'express';
import createUser from '../controllers/post.js';
import getAllUsers from '../controllers/get.js';

const router = express.Router();

router.post('/users', createUser);
router.get('/users', getAllUsers);

export default router;