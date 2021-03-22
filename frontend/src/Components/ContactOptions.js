import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BsPencil, BsTrash, BsEye } from 'react-icons/bs';

import DataContext from '../Utils/context';

const contactOptions = ({ contact }) => {
  const {
    handleUpdateContact,
    handleShowUpdateHistory,
    handleRemoveContact,
  } = useContext(DataContext);
  return (
    <ButtonGroup>
      <Button variant="primary" size="sm" onClick={() => handleShowUpdateHistory(contact.id)}><BsEye /></Button>
      <Button variant="warning" size="sm" onClick={() => handleUpdateContact(contact)}><BsPencil /></Button>
      <Button variant="danger" size="sm" onClick={() => handleRemoveContact(contact.id)}><BsTrash /></Button>
    </ButtonGroup>
  );
};

export default contactOptions;
