import { Router } from 'express';
import {
    addContact, getContact, listContacts, deleteContact, updateContact, checkExistsEmail,
} from '../controllers/contacts.js';
import {
    createValidation, emailValidation, validate, validFieldsValidation, idValidation,
} from '../middlewares/validators.js';

const contactRoutes = Router();

const contacts = (router) => {
    router.use('/contacts', contactRoutes);

    contactRoutes.post('/', createValidation(), validate, addContact);
    contactRoutes.get('/', listContacts);
    contactRoutes.get('/:id', idValidation(), validate, getContact);
    contactRoutes.delete('/:id', idValidation(), validate, deleteContact);
    contactRoutes.patch('/:id', idValidation(), validFieldsValidation(), validate, updateContact);
};

export default contacts;
