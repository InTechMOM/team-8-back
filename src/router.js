import express from "express";
import usersRouter from "./api/users/routes/index.js";

const router = express.Router();

router.use('/', usersRouter);

export default router;