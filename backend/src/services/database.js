import { Contact, RemovedContact } from '../models/contact.js';

export const getContactById = async (id) => Contact.findById(id);

export const getContactByEmail = async (email) => Contact.findOne({ email });

export const removeContact = async (contact) => {
    await new RemovedContact(contact.toObject()).save();
    await contact.remove();
};

export const updateContactById = async (id, fieldsToUpdate) => Contact.findByIdAndUpdate(id, {
    $set: fieldsToUpdate,
    $push: { updateHistory: fieldsToUpdate },
});

export const getAllContacts = async () => Contact.find({}, { updateHistory: 0 });

export const createContact = async (contactFields) => new Contact(
    {
        ...contactFields,
        updateHistory: contactFields,
    },
).save();
