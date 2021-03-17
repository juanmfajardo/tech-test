import Button from 'react-bootstrap/Button';
import { BsPencil, BsTrash, BsEye } from 'react-icons/bs';

const contactOptions = () => (
  <div>
    <Button variant="primary" size="sm" className="mr-2"><BsEye /></Button>
    <Button variant="warning" size="sm" className="mr-2"><BsPencil /></Button>
    <Button variant="danger" size="sm"><BsTrash /></Button>
  </div>
);

export default contactOptions;
