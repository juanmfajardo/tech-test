/* eslint-disable prefer-destructuring */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const updateHistorySchema = new Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        phoneNumber: String,
    },
    {
        _id: false,
        timestamps: { createdAt: false, updatedAt: true },
    },
);

const contactSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        index: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    updateHistory: [updateHistorySchema],
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
