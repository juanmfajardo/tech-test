import { Fab } from 'react-tiny-fab';

import 'react-tiny-fab/dist/styles.css';

const FloatingButton = ({ handleClick }) => (
  <Fab
    mainButtonStyles={{ background: 'green' }}
    icon="+"
    onClick={handleClick}
  />
);

export default FloatingButton;
