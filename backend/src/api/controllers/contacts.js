import { Contact, RemovedContact } from '../../models/contact.js';

export const addContact = async (req, res) => {
    const {
        firstName, lastName, email, phoneNumber,
    } = req.body;

    const contactFields = {
        firstName,
        lastName,
        email,
        phoneNumber,
    };

    const contact = await new Contact(
        {
            ...contactFields,
            updateHistory: contactFields,
        },
    ).save();

    res.json({ message: 'Contact successfully added', contact }).status(200);
};

export const deleteContact = async (req, res) => {
    const { id } = req.params;

    const contact = await Contact.findById(id);

    await new RemovedContact(contact.toObject()).save();
    contact.remove();

    res.json({ message: 'Contact successfully deleted' }).status(200);
};

export const updateContact = async (req, res) => {
    const {
        firstName, lastName, email, phoneNumber,
    } = req.body;
    const { id } = req.params;

    const fieldsToUpdate = {
        firstName,
        lastName,
        email,
        phoneNumber,
    };

    const contact = await Contact.findById(id, { updateHistory: 0 }).lean();

    Object.keys(fieldsToUpdate).forEach((key) => (
        (fieldsToUpdate[key] === contact[key] || fieldsToUpdate[key] === undefined)
        && delete fieldsToUpdate[key]));

    await Contact.findByIdAndUpdate(id, {
        $set: fieldsToUpdate,
        $push: { updateHistory: fieldsToUpdate },
    }, { new: true });

    res.json({ message: 'Contact successfully updated', updatedFields: fieldsToUpdate }).status(200);
};

export const getContact = async (req, res) => {
    const { id } = req.params;

    const contact = await Contact.findById(id);

    res.json({ message: 'Contact successfully obtained', contact }).status(200);
};

export const listContacts = async (req, res) => {
    const contacts = await Contact.find({}, { updateHistory: 0 });

    res.json({ message: 'Contacts successfully obtained', contacts }).status(200);
};

export const checkExistsEmail = async (req, res) => {
    const { emailValue: email } = req.params;
    const contact = await Contact.findOne({ email });

    if (contact) return res.json({ message: 'Email already in use' }).status(200);
    return res.status(404).json({ message: 'Email not Found' });
};
