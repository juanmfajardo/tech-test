import { Router } from 'express';
import { addContact, 
    getContact,
    listContacts,
    deleteContact,
    updateContact } from '../controllers/contacts.js';

const contactRoutes = Router();

const contacts = (router) => {
    router.use('/contacts', contactRoutes);

    contactRoutes.post('/', addContact);
    contactRoutes.get('/', listContacts);
    contactRoutes.get('/:id', getContact);
    contactRoutes.delete('/:id', deleteContact);
    contactRoutes.patch('/:id', updateContact);
};


export default contacts;
