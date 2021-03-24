import {
    getContactById, removeContact, updateContactById, getAllContacts, getContactByEmail,
    createContact,
} from '../../services/database.js';

import getFieldsToUpdate from '../../services/contacts.js';
import response from './responses.js';

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

    return response.success(res, 'Contact successfully added', { data: contact });
};

export const deleteContact = async (req, res) => {
    const { id } = req.params;

    const contact = await getContactById(id);
    if (!contact) {
        return response.notFound(res, 'Contact not found');
    }
    await removeContact(contact);

    return response.success(res, 'Contact successfully deleted', { data: contact });
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
    if (!contact) {
        return response.notFound(res, 'Contact not found');
    }
    const fieldsToUpdate = getFieldsToUpdate(contactFields, contact);

    if (Object.entries(fieldsToUpdate).length) {
        await updateContactById(id, fieldsToUpdate);
    }

    return response.success(res, 'Contact successfully updated', { data: contact });
};

export const getContact = async (req, res) => {
    const { id } = req.params.test;

    const contact = await getContactById(id);
    if (!contact) {
        return response.notFound(res, 'Contact not found');
    }

    return response.success(res, 'Contact successfully obtained', { data: contact });
};

export const getContacts = async (req, res) => {
    const contacts = await getAllContacts();

    return response.success(res, 'Contacts successfully obtained', { data: contacts });
};

export const checkExistsEmail = async (req, res) => {
    const { email } = req.params;
    const contact = await getContactByEmail(email);
    if (contact) {
        return response.success(res, 'Email already in use');
    }
    return response.notFound(res, 'Email not Found');
};
