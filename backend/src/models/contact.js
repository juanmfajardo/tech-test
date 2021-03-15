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
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;