/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import moment from 'moment';

import Modal from 'react-bootstrap/Modal';

const FormModal = ({ visible, handleClose, updateHistory = [] }) => (
  <Modal animation={false} show={visible} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Update History</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {
        updateHistory.map((item, index) => (
          <div key={item.id}>
            { index === 0
              ? <p><b>{`Original Contact (${moment(item.updatedAt).format('DD/MM/YYYY HH:mm:ss')}):`}</b></p>
              : <p><b>{`Update ${index + 1} (${moment(item.updatedAt).format('DD/MM/YYYY HH:mm:ss')}):`}</b></p> }
            {item.firstName && <p>{`Fist name: ${item.firstName}`}</p>}
            {item.lastName && <p>{`Last name: ${item.lastName}`}</p>}
            {item.email && <p>{`Email: ${item.email}`}</p>}
            {item.phoneNumber && <p>{`Phone number: ${item.phoneNumber}`}</p>}
          </div>
        ))
      }
    </Modal.Body>
  </Modal>
);

export default FormModal;
