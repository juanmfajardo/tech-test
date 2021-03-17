import Actions from './ContactOptions';

const ContactRow = ({ contact }) => (
  <tr key={contact.id}>
    <td>{contact.id}</td>
    <td>{contact.firstName}</td>
    <td>{contact.lastName}</td>
    <td>{contact.email}</td>
    <td>{contact.phoneNumber}</td>
    <td>
      <Actions />
    </td>
  </tr>
);

export default ContactRow;
