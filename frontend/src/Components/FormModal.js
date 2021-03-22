import Modal from 'react-bootstrap/Modal';
import ContactForm from './ContactForm';

const FormModal = ({
  visible, handleClose, contact, handleSubmitForm,
}) => {
  const getTitle = () => {
    if (contact) {
      return 'Update contact';
    }
    return 'Add new contact';
  };

  return (
    <Modal animation={false} show={visible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{getTitle()}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactForm contact={contact} handleSubmitForm={handleSubmitForm} />
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
