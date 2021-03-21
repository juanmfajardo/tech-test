import { body, param, validationResult } from 'express-validator';

import { Contact } from '../../models/contact.js';

const emailInUse = async (value) => {
    const contact = await Contact.findOne({ email: value });
    if (contact) throw new Error('email already in use');
    return true;
};

export const contactFieldsValidation = () => [
    body('firstName')
        .notEmpty()
        .withMessage('firstName can not be empty!'),
    body('lastName')
        .notEmpty()
        .withMessage('lastName can not be empty!'),
    body('phoneNumber')
        .notEmpty()
        .withMessage('phoneNumber can not be empty!')
        .isMobilePhone()
        .withMessage('phoneNumber is not a valid Phone Number!'),
    body('email')
        .notEmpty()
        .withMessage('email can not be empty!')
        .bail()
        .trim()
        .toLowerCase()
        .isEmail()
        .withMessage('email is not a valid Email!')
        .custom(emailInUse),
];

export const emailValidation = () => [
    param('email')
        .notEmpty()
        .withMessage('email can not be empty!')
        .bail()
        .trim()
        .toLowerCase()
        .isEmail()
        .withMessage('email is not a valid Email!'),
];

export const idValidation = () => [
    param('id')
        .trim()
        .notEmpty()
        .withMessage('id can not be empty!')
        .bail()
        .isMongoId()
        .withMessage('id is not a valid Id!'),
];

export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) return next();

    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({ errors: extractedErrors });
};
