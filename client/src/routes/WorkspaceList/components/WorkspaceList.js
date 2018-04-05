import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  TabContent, TabPane, Nav, NavItem, NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { renderInput } from '../../../components/form';
import { registerFormValidate } from '../../../helpers/validates';

class WorkspaceList extends React.Component {
  constructor(props) {
    super(props);

    this.toggleT = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                  >
                    Workspace list
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                  >
                    Create Workspace
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  Hello world
                </TabPane>
                <TabPane tabId="2">
                  2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default WorkspaceList;
