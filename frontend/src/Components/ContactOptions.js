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
      <Button className="shadow-none" variant="primary" size="sm" active={false} onClick={() => handleShowUpdateHistory(contact.id)}><BsEye /></Button>
      <Button className="shadow-none" variant="warning" size="sm" active={false} onClick={() => handleUpdateContact(contact)}><BsPencil /></Button>
      <Button className="shadow-none" variant="danger" size="sm" active={false} onClick={() => handleRemoveContact(contact.id)}><BsTrash /></Button>
    </ButtonGroup>
  );
};

export default contactOptions;
