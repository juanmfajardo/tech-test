/* eslint-disable prefer-destructuring */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const updateHistorySchema = new Schema(
    {
        firstName: { type: String, trim: true },
        lastName: { type: String, trim: true },
        email: { type: String, trim: true, lowercase: true },
        phoneNumber: { type: String, trim: true },
    },
    {
        timestamps: { createdAt: false, updatedAt: true },
    },
);

const contactSchema = new Schema(
    {
        firstName: {
            type: String,
            trim: true,
            required: true,
        },
        lastName: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            index: true,
        },
        phoneNumber: {
            type: String,
            trim: true,
            required: true,
        },
        updateHistory: [updateHistorySchema],
    },
    {
        timestamps: true,
    },
);

export const Contact = mongoose.model('Contact', contactSchema);
export const RemovedContact = mongoose.model('Removed Contacts', contactSchema);
