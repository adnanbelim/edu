import express from 'express';
import { loginUser, registerUser, adminLogin, addEnrollment, getEnrollment, fetchEnroll, removeEnroll } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', adminLogin);
userRouter.get("/enrollment", fetchEnroll)
userRouter.post("/remove", removeEnroll)
userRouter.post("/enrollment/:userId", addEnrollment);
userRouter.get("/enrollment/get/:userId", getEnrollment);


export default userRouter;