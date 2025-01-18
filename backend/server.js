import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import courseRouter from './routes/courseRoute.js';
import sendEmail from './config/nodeMailer.js';
import eventRouter from './routes/eventRoute.js';
// App Config
const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// Connection of Mongo and Cloudinary
connectDB();
connectCloudinary();

// api endpoint
app.use('/api/user', userRouter);
app.use('/api/course', courseRouter);
app.use('/api/event', eventRouter);

app.post('/send-email', async (req, res) => {
    const { name, email, number, message } = req.body;

    // Check for missing fields
    if (!name || !email || !number || !message) {
        return res.status(400).json({ message: 'Please provide all information' });
    }

    try {
        const info = await sendEmail({ name, email, number, message });
        return res.status(200).json({ message: 'Email sent successfully', info });
    } catch (error) {
        return res.status(500).json({ message: 'Error sending email', error });
    }
});


app.get('/', (req, res) => {
    res.send('Endpoint Hit!!');
});

// PORT Listen
app.listen(PORT, (error) => {
    if(error) return console.error(error);
    console.log(`PORT running on ${PORT}`);
});
