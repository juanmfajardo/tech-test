import Contact from '../../models/contact.js';

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

    await Contact.findByIdAndUpdate(id, { deleted: true });

    res.json({ message: 'Contact successfully deleted' }).status(200);
};

export const updateContact = async (req, res) => {
    const {
        firstName, lastName, email, phoneNumber,
    } = req.body;
    const { id } = req.params;

    const contactsFieldsToUpdate = {
        firstName,
        lastName,
        email,
        phoneNumber,
    };

    Object.keys(contactsFieldsToUpdate).forEach((key) => (
        contactsFieldsToUpdate[key] === undefined && delete contactsFieldsToUpdate[key]));

    await Contact.findByIdAndUpdate(id, {
        $set: contactsFieldsToUpdate,
        $push: { updateHistory: contactsFieldsToUpdate },
    }, { new: true });

    res.json({ message: 'Contact successfully updated', updatedFields: contactsFieldsToUpdate }).status(200);
};

export const getContact = async (req, res) => {
    const { id } = req.params;

    const contact = await Contact.findById(id);

    res.json({ message: 'Contact successfully obtained', contact }).status(200);
};

export const listContacts = async (req, res) => {
    const contacts = await Contact.find({ deleted: false });

    res.json({ message: 'Contacts successfully obtained', contacts }).status(200);
};
