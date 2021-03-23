import Table from 'react-bootstrap/Table';
import ContactRow from './ContactRow';

const ContactsTable = ({ contacts }) => (
  <Table responsive striped bordered hover style={{ marginTop: '50px' }}>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Options</th>
      </tr>
    </thead>
    <tbody>
      { contacts.map((contact, index) => (
        <ContactRow key={contact.id} contact={contact} index={index} />
      ))}
    </tbody>
  </Table>
);

export default ContactsTable;
