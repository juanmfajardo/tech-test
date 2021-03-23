import ContactOptions from './ContactOptions';

const ContactRow = ({ contact, index }) => (
  <tr>
    <td>{index + 1}</td>
    <td>{contact.firstName}</td>
    <td>{contact.lastName}</td>
    <td>{contact.email}</td>
    <td>{contact.phoneNumber}</td>
    <td>
      <ContactOptions contact={contact} />
    </td>
  </tr>
);

export default ContactRow;
