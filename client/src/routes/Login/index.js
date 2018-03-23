import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';

const Login = () => (
  <div className="app flex-row align-items-center">
    <Container>
      <Row className="justify-content-center">
        <Col md="8">
          <CardGroup>
            <Card className="p-4">
              <CardBody>
                <h1>Login</h1>
                <p className="text-muted">Sign In to your account</p>
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      Username:
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input type="text" placeholder="Username"/>
                </InputGroup>
                <InputGroup className="mb-4">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      Password:
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input type="password" placeholder="Password"/>
                </InputGroup>
                <Row>
                  <Col xs="6">
                    <Button color="primary" className="px-4">Login</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
              <CardBody className="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.</p>
                  <Button color="primary" className="mt-3" active href="/register">Register Now!</Button>
                </div>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  </div>
);

export default reduxForm({
  form: 'loginForm',
  onSubmit: (values, dispatch, props) => {
  },
})(Login);
