import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    stream: { type: String, require: true },
    image: { type: Array, require: true },
    description: { type: String, require: true },
    list: { type: [String], require: true },
});

const courseModel = mongoose.models.course || mongoose.model("course", courseSchema);

export default courseModel;