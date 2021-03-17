import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContactsTable from './Components/ContactsTable';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <ContactsTable contacts={contacts} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
