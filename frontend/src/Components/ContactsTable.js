import Table from 'react-bootstrap/Table';
import ContactRow from './ContactRow';

const ContactsTable = ({ contacts }) => (
  <Table striped bordered hover>
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
      { contacts.map((contact) => (
        <ContactRow contact={contact} />
      ))}
    </tbody>
  </Table>
);

export default ContactsTable;
