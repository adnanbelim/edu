import cloudinary from 'cloudinary';
import eventModel from '../models/eventModel.js';

// Add event
const addEvent = async (req, res) => {
    try {
        const { name, description} = req.body;

        // Check if image is uploaded and store the image
        const image = req.files.image1 && req.files.image1[0];

        if (!image) {
            return res.status(400).json({ message: 'No image uploaded', success: false });
        }

        // Upload image to Cloudinary
        const imageUrl = await cloudinary.uploader.upload(image.path, { resource_type: 'image' });

        const eventData = {
            image: imageUrl.secure_url, // Save Cloudinary URL
            name,
            description,
        };

        // Save the event to the database
        const event = new eventModel(eventData);
        await event.save();

        res.status(200).json({ message: 'Event added successfully', success: true });

    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error: ' + error.message, success: false });
    }
};

// List events
const listEvents = async (req, res) => {
    try {
        const events = await eventModel.find({});
        res.status(200).json({ success: true, event: events });  // Use 'event' instead of 'events'
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error: ' + error.message, success: false });
    }
};


// Remove event
const removeEvent = async (req, res) => {
    try {
        const { id } = req.body;  // Extract the ID from the request body
        if (!id) {
            return res.status(400).json({ success: false, message: 'event ID is required' });
        }

        const event = await eventModel.findByIdAndDelete(id);
        if (!event) {
            return res.status(404).json({ success: false, message: 'event not found' });
        }

        res.status(200).json({ success: true, message: 'Event removed' });
    } catch (error) {
        console.error(error);  // Log the error for debugging
        return res.status(500).json({ message: 'Internal Server Error: ' + error.message, success: false });
    }
};

export {addEvent, listEvents, removeEvent}

