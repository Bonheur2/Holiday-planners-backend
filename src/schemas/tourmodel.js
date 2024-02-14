import mongoose from "mongoose";
const { Schema } = mongoose;

const tourschema = mongoose.Schema({
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: false
    },
    gourpsize: {
        type: Number
    }

})
export const tour = mongoose.model("tours", tourschema)