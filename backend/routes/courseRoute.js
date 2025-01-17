import express from 'express';
import { addCourse, listCourses, removeCourse } from '../controllers/courseController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const courseRouter = express.Router();
// process the middleware upload, multipart of data
courseRouter.post('/add', adminAuth, upload.fields([{ name: 'image1', maxCount: 1 }]), addCourse);
courseRouter.post('/remove', removeCourse);
courseRouter.get('/list', listCourses);

export default courseRouter;