import userModel from "../models/userModel.js";
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

// Route for login route

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(409).json({ message: "User doesn't exist", success: false });
        }
        const passMatch = await bcrypt.compare(password, user.password);

        if (passMatch) {
            const token = createToken(user._id);
            return res.status(200).json({ message: 'Welcome ' + user.name, token: token, id: user._id, success: true });
        } else {
            return res.status(403).json({ message: 'Invalid credential', success: false });
        }

    } catch (error) {
        return res.status(500).json({ message: 'Internal Server error ' + error.message, success: false });
    }
}

// Route for register route

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const exist = await userModel.findOne({ email });
        if (exist) {
            return res.status(409).json({ message: 'Email already exist', success: false });
        }

        // validator and password hashing...

        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: 'Please provide valid email', success: false });
        }
        if (password.length < 8) {
            return res.status(400).json({ message: 'Password length must be 8', success: false });
        }
        else {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            const newUser = new userModel({
                name, email, password: hashPassword
            });

            const user = await newUser.save();

            // Create token

            const token = createToken(user._id)
            return res.status(201).json({ message: 'User Register successfully', token: token, id: user._id, success: true });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server error ' + error.message, success: false });
    }
}

// Route for admin login route

const adminLogin = (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            res.status(201).json({ message: 'Welcome Admin', success: true, token });
        }else{
            return res.status(500).json({ message: 'Invalid credentials', success: false });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server error ' + error.message, success: false });
    }
}

// Admin Enroll data list

const fetchEnroll = async (req, res) => {
    try {
        const response = await userModel.find({});
        res.status(200).json({ success: true, enrollment: response });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}


const removeEnroll = async (req, res) => {
    try {
        const response = await userModel.findOneAndDelete({ id: req.params.id }); // make sure you're passing the correct field
        if (response) { // check if the response is valid
            res.status(200).json({ message: 'Course deleted', success: true });
        } else {
            res.status(404).json({ message: 'Course not found', success: false });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}



// Add Enrollment Data
const addEnrollment = async (req, res) => {
    const { userId } = req.params; // Assume you pass the user's ID in the route
    const { name, fatherName, email, phone, stream, street, city, state, zipcode, country } = req.body;

    try {
        // Build the enrollment object
        const enrollmentData = {
            fill: true,
            name,
            fatherName,
            email,
            phone,
            stream,
            address: {
                street,
                city,
                state,
                zipcode,
                country,
            },
            date: new Date(), // Current date
        };

        // Update the user's enrollment field
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { enrollment: enrollmentData },
            { new: true } // Return the updated document
        );

        res.status(200).json({
            message: "Enrollment successfully",
            data: updatedUser,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating enrollment",
            error: error.message,
        });
    }
};

const getEnrollment = async (req, res) => {
    try {
        const { userId } = req.params; // Extract userId from the request parameters
        const user = await userModel.findById(userId); // Find the user by ID

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        if (!user.enrollment) {
            return res.status(404).json({ success: false, message: 'Enrollment data not found' });
        }

        res.status(200).json({ success: true, enrollment: user.enrollment }); // Respond with enrollment data
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error: ' + error.message });
    }
};


export { loginUser, registerUser, adminLogin, addEnrollment, getEnrollment, fetchEnroll, removeEnroll };