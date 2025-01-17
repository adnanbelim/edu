import express from 'express';
import { addEvent, listEvents, removeEvent } from '../controllers/eventController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const eventRouter = express.Router();
// process the middleware upload, multipart of data
eventRouter.post('/add', adminAuth, upload.fields([{ name: 'image1', maxCount: 1 }]), addEvent);
eventRouter.post('/remove', removeEvent);
eventRouter.get('/list', listEvents);

export default eventRouter;