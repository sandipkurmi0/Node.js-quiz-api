import express from 'express';
import userRoutes from './userRoute';
import questionRoutes from './questionRoute'


const router = express.Router();

userRoutes(router);
questionRoutes(router)


export default router;
