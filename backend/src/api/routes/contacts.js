import { Router } from 'express';
import {
    addContact, getContact, getContacts, deleteContact, updateContact, checkExistsEmail,
} from '../controllers/contacts.js';
import {
    contactFieldsValidation, emailValidation, validate, idValidation,
} from '../middlewares/validators.js';

import asyncHandler from '../../utils/index.js';

const contactRoutes = Router();

const contacts = (router) => {
    router.use('/contacts', contactRoutes);

    contactRoutes.get('/verify/:email?', emailValidation(), validate, asyncHandler(checkExistsEmail));

    contactRoutes.post('/', contactFieldsValidation(), validate, asyncHandler(addContact));
    contactRoutes.get('/', asyncHandler(getContacts));
    contactRoutes.get('/:id', idValidation(), validate, asyncHandler(getContact));
    contactRoutes.delete('/:id', idValidation(), validate, asyncHandler(deleteContact));
    contactRoutes.patch('/:id', idValidation(), validate, asyncHandler(updateContact));
};

export default contacts;
