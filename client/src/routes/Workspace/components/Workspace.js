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
import WorkspaceList from './WorkspaceList';
import WorkspaceForm from './WorkspaceForm';
import { WORKSPACE_LIST_TAB_LIST, WORKSPACE_LIST_TAB_CREATE } from '../modules';

class Workspace extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getWorkspaceListRequest();
  }

  render() {
    const { loading, createWorkspace, activeTab, changeTab, workspaces, creating, createError } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === WORKSPACE_LIST_TAB_LIST })}
                    onClick={() => { changeTab(WORKSPACE_LIST_TAB_LIST); }}
                  >
                    Workspace list
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === WORKSPACE_LIST_TAB_CREATE })}
                    onClick={() => { changeTab(WORKSPACE_LIST_TAB_CREATE); }}
                  >
                    Create Workspace
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId={WORKSPACE_LIST_TAB_LIST}>
                  <WorkspaceList workspaces={workspaces} loading={loading} />
                </TabPane>
                <TabPane tabId={WORKSPACE_LIST_TAB_CREATE}>
                  <WorkspaceForm createWorkspace={createWorkspace} loading={creating} error={createError} />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default Workspace;
