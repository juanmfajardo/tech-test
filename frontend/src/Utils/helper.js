import CONSTANTS from './constants';

export const getContacts = async () => {
  try {
    const contacts = await fetch(`${CONSTANTS.API_HOST}${CONSTANTS.CONTACT_ROUTE}`);
    const json = await contacts.json();
    const response = json.data || [];

    return response;
  } catch (error) {
    return error.message;
  }
};

export const getContact = async (id) => {
  try {
    const contact = await fetch(`${CONSTANTS.API_HOST}${CONSTANTS.CONTACT_ROUTE}/${id}`);
    const json = await contact.json();
    const response = json.data || null;

    return response;
  } catch (error) {
    return error.message;
  }
};

export const removeContact = async (id) => {
  try {
    const contact = await fetch(`${CONSTANTS.API_HOST}${CONSTANTS.CONTACT_ROUTE}/${id}`, {
      method: 'DELETE',
    });
    const json = await contact.json();
    const response = json.data || null;

    if (response.id === id) return true;
    return false;
  } catch (error) {
    return error.message;
  }
};

export const updateContact = async (fields) => {
  try {
    const {
      firstName, lastName, phoneNumber, email, id,
    } = fields;

    const updateContactRes = await fetch(`${CONSTANTS.API_HOST}${CONSTANTS.CONTACT_ROUTE}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        phoneNumber,
        email,
      }),
    });

    const json = await updateContactRes.json();
    const response = json.data.updatedFields || null;
    return response;
  } catch (error) {
    return error.message;
  }
};

export const createContact = async (fields) => {
  try {
    const {
      firstName, lastName, phoneNumber, email,
    } = fields;

    const updateContactRes = await fetch(`${CONSTANTS.API_HOST}${CONSTANTS.CONTACT_ROUTE}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        phoneNumber,
        email,
      }),
    });

    const json = await updateContactRes.json();
    const response = json.data || null;
    return response;
  } catch (error) {
    return error.message;
  }
};

export const checkEmailInUse = async (email) => {
  try {
    const contact = await fetch(`${CONSTANTS.API_HOST}${CONSTANTS.CONTACT_ROUTE}/verify/${email}`);
    if (contact.status === 200) return true;
    return false;
  } catch (error) {
    return error.message;
  }
};
