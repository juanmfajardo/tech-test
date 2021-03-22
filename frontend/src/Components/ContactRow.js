import ContactOptions from './ContactOptions';

const ContactRow = ({ contact }) => (
  <tr>
    <td>{contact.id}</td>
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
