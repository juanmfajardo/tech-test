const getFieldsToUpdate = (fields, contact) => {
    const fieldsToUpdate = { ...fields };

    Object.keys(fieldsToUpdate).forEach((key) => (
        (fieldsToUpdate[key] === contact[key] || fieldsToUpdate[key] === undefined)
        && delete fieldsToUpdate[key]));

    return fieldsToUpdate;
};

export default getFieldsToUpdate;
