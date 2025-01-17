import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    enrollment: {
        type: {
            fill: { type: Boolean, default: false },
            name: { type: String },
            fatherName: { type: String },
            email: { type: String },
            phone: { type: String },
            stream: { type: String },
            address: {
                street: { type: String },
                city: { type: String },
                state: { type: String },
                zipcode: { type: String },
                country: { type: String },
            },
            date: { type: Date },
        },
        default: { fill: false }, // Default value for the `enrollment` object
    },
});

const userModel = mongoose.models.users || mongoose.model("users", userSchema);

export default userModel;
