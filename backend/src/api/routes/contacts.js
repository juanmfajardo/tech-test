import { Router } from 'express';
import {
    addContact, getContact, getContacts, deleteContact, updateContact, checkExistsEmail,
} from '../controllers/contacts.js';
import {
    contactFieldsValidation, emailValidation, validate, idValidation,
} from '../middlewares/validators.js';

const contactRoutes = Router();

const contacts = (router) => {
    router.use('/contacts', contactRoutes);

    contactRoutes.get('/verify/:email?', emailValidation(), validate, checkExistsEmail);

    contactRoutes.post('/', contactFieldsValidation(), validate, addContact);
    contactRoutes.get('/', getContacts);
    contactRoutes.get('/:id', idValidation(), validate, getContact);
    contactRoutes.delete('/:id', idValidation(), validate, deleteContact);
    contactRoutes.patch('/:id', idValidation(), validate, updateContact);
};

export default contacts;
