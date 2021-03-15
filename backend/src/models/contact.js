import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
        index: true,
    },
    phoneNumber: String,
    deleted: { type: Boolean, default: false },
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;