import { model } from 'mongoose';

const Contact = model('Contact', {
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
        index: true,
    },
    phoneNumber: String,
});

export default Contact;