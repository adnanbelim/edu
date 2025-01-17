import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    name: { type: String, require: true },
    image: { type: Array, require: true },
    description: { type: String, require: true },
});

const eventModel = mongoose.models.event || mongoose.model("event", eventSchema);

export default eventModel;