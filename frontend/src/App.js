import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import ContactsTable from './Components/ContactsTable';
import FloatingButton from './Components/FloatingButton';
import FormModal from './Components/FormModal';
import HistoryModal from './Components/HistoryModal';

import './App.css';

import {
  getContacts, getContact, removeContact, updateContact, createContact,
} from './Utils/helper';

import DataContext from './Utils/context';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState(null);
  const [error, setError] = useState('');
  const [showFormModal, setShowFormModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  const getInitialData = async () => {
    const c = await getContacts();
    if (Array.isArray(c)) {
      setContacts(c);
    } else {
      setError(c);
    }
  };

  const handleUpdateContact = (contactToUpdate) => {
    setShowFormModal(true);
    setContact(contactToUpdate);
  };

  const handleRemoveContact = async (contactId) => {
    const removedContact = await removeContact(contactId);
    if (removedContact) {
      setContacts(contacts.filter((c) => c.id !== contactId));
      setContact(null);
    }
  };

  const handleSubmitForm = async (fields) => {
    const isUpdate = !!fields?.id;

    if (isUpdate) {
      const updatedfields = await updateContact(fields);
      if (updatedfields) {
        const index = contacts.findIndex((c) => c.id === fields.id);
        const contactsCopy = [...contacts];
        Object.keys(updatedfields).forEach((key) => {
          contactsCopy[index][key] = updatedfields[key];
        });
        setContacts(contactsCopy);
        setContact(null);
        setShowFormModal(false);
      }
    } else {
      const newContact = await createContact(fields);
      setContacts([...contacts, newContact]);
      setContact(null);
      setShowFormModal(false);
    }
  };

  const handleShowUpdateHistory = async (contactId) => {
    setShowHistoryModal(true);
    const c = await getContact(contactId);
    setContact(c);
  };

  const handleCloseModal = (modal) => {
    if (modal === 'history') setShowHistoryModal(false);
    else setShowFormModal(false);
    setContact(null);
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        handleUpdateContact,
        handleRemoveContact,
        handleShowUpdateHistory,
      }}
    >
      <div className="App">
        {!!error && (
        <Alert variant="danger" onClose={() => setError('')} dismissible>
          {error}
        </Alert>
        )}
        <FormModal
          visible={showFormModal}
          handleClose={() => handleCloseModal('form')}
          contact={contact}
          handleSubmitForm={handleSubmitForm}
        />
        <HistoryModal
          visible={showHistoryModal}
          handleClose={() => handleCloseModal('history')}
          updateHistory={contact?.updateHistory}
        />
        <Container>
          <Row>
            <Col>
              <ContactsTable
                contacts={contacts}
              />
            </Col>
          </Row>
          <FloatingButton handleClick={() => setShowFormModal(true)} />
        </Container>
      </div>
    </DataContext.Provider>
  );
};

export default App;
