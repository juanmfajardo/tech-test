import Contact from '../../models/contact.js';

export const addContact = async (req, res) => {
    const { firstName, lastName, email, phoneNumber } = req.body;

    const contact = await new Contact({
        firstName,
        lastName,
        email,
        phoneNumber}).save();
    
    res.json({ message: 'Contact successfully added', contact }).status(200)
};

export const deleteContact = async (req, res) => {
    const { id } = req.params;

    const contact = await Contact.findByIdAndUpdate(id, { deleted: true });

    res.json({ message: 'Contact successfully deleted' }).status(200)
};

export const getContact = async (req, res) => {
    const { id } = req.params;

    const contact = await Contact.findById(id);

    res.json({ message: 'Contact successfully obtained', contact }).status(200)
};

export const listContacts = async (req, res) => {
    const contacts = await Contact.find({ deleted: false });

    res.json({ message: 'Contacts successfully obtained', contacts }).status(200)
};