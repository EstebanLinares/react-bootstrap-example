import logo from './logo.svg';
import './App.css';
import { Container, Col, Row, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Container>
          <Form className="mb-3">
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email here"></Form.Control>
                  <Form.Text className="text-muted">
                    Nosotros manejamos tu email para contactarnos y eviar datos
          </Form.Text>
                </Form.Group>
              </Col>

              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="password"></Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Button variant="secondary" type="submit">Login</Button>
          </Form>
          <Card className="mb-3" style={{ color: "#000" }}>
            <Card.Img src="https://dummyimage.com/400x100/000/fff"></Card.Img>
            <Card.Body>
              <Card.Title>My first card</Card.Title>
              <Card.Text>
                This is an example of react boostrap cards
          </Card.Text>
              <Button variant="primary">Read more</Button>
            </Card.Body>

          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>Ventas</Breadcrumb.Item>
            <Breadcrumb.Item>Compras</Breadcrumb.Item>
            <Breadcrumb.Item active>clientes</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant="success"> This is a button</Alert>
          <Button>Test button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
