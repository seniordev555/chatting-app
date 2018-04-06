import React, { Fragment } from 'react';
import { Row, Col, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

const WorkspaceList = ({ loading, workspaces }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      { workspaces && workspaces.length === 0 &&
        <Alert color="info">There is no workspace. Please create a new one</Alert>
      }
      { workspaces && workspaces.length > 0 &&
        <ul className="list-group">
          {workspaces.map(workspace =>
            <li key={workspace.id} className="justify-content-between list-group-item">
              <Row>
                <Col>
                  {workspace.fullName}
                </Col>
                <Col>
                  <Link to={`/${workspace.displayName}`}>
                    {`${process.env.REACT_APP_HOST}/${workspace.displayName}`}
                  </Link>
                </Col>
              </Row>
            </li>
          )}
        </ul>
      }
    </Fragment>
  );
};

export default WorkspaceList;
