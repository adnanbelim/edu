import cloudinary from 'cloudinary';
import courseModel from '../models/courseModel.js';

// Add Course
const addCourse = async (req, res) => {
    try {
        const { stream, description, list } = req.body;

        // Check if image is uploaded and store the image
        const image = req.files.image1 && req.files.image1[0];

        if (!image) {
            return res.status(400).json({ message: 'No image uploaded', success: false });
        }

        // Upload image to Cloudinary
        const imageUrl = await cloudinary.uploader.upload(image.path, { resource_type: 'image' });

        const courseData = {
            image: imageUrl.secure_url, // Save Cloudinary URL
            stream,
            description,
            list,
        };

        // Save the course to the database
        const course = new courseModel(courseData);
        await course.save();

        res.status(200).json({ message: 'Course added successfully', success: true });

    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error: ' + error.message, success: false });
    }
};

// List Courses
const listCourses = async (req, res) => {
    try {
        const courses = await courseModel.find({});
        res.status(200).json({ success: true, course: courses });  // Use 'course' instead of 'courses'
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error: ' + error.message, success: false });
    }
};


// Remove Course
const removeCourse = async (req, res) => {
    try {
        const { id } = req.body;  // Extract the ID from the request body
        if (!id) {
            return res.status(400).json({ success: false, message: 'Course ID is required' });
        }

        const course = await courseModel.findByIdAndDelete(id);
        if (!course) {
            return res.status(404).json({ success: false, message: 'Course not found' });
        }

        res.status(200).json({ success: true, message: 'Course removed' });
    } catch (error) {
        console.error(error);  // Log the error for debugging
        return res.status(500).json({ message: 'Internal Server Error: ' + error.message, success: false });
    }
};

export {addCourse, listCourses, removeCourse}

