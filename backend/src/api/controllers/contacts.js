import {
    getContactById, removeContact, updateContactById, getAllContacts, getContactByEmail,
    createContact,
} from '../../services/database.js';

import getFieldsToUpdate from '../../services/contacts.js';

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

    const contact = await createContact(contactFields);

    res.json({ message: 'Contact successfully added', contact }).status(200);
};

export const deleteContact = async (req, res) => {
    const { id } = req.params;

    const contact = await getContactById(id);
    await removeContact(contact);

    res.json({ message: 'Contact successfully deleted' }).status(200);
};

export const updateContact = async (req, res) => {
    const {
        firstName, lastName, email, phoneNumber,
    } = req.body;
    const { id } = req.params;

    const contactFields = {
        firstName,
        lastName,
        email,
        phoneNumber,
    };

    const contact = await getContactById(id);
    const fieldsToUpdate = getFieldsToUpdate(contactFields, contact);

    if (Object.entries(fieldsToUpdate).length) {
        await updateContactById(id, fieldsToUpdate);
    }

    res.json({ message: 'Contact successfully updated', updatedFields: fieldsToUpdate }).status(200);
};

export const getContact = async (req, res) => {
    const { id } = req.params;

    const contact = await getContactById(id);

    res.json({ message: 'Contact successfully obtained', contact }).status(200);
};

export const getContacts = async (req, res) => {
    const contacts = await getAllContacts();

    res.json({ message: 'Contacts successfully obtained', contacts }).status(200);
};

export const checkExistsEmail = async (req, res) => {
    const { emailValue: email } = req.params;
    const contact = await getContactByEmail(email);

    if (contact) return res.json({ message: 'Email already in use' }).status(200);
    return res.status(404).json({ message: 'Email not Found' });
};
