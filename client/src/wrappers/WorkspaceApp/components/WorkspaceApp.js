import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../../../routes/Login';
import Register from '../../../routes/Register'

class WorkspaceApp extends React.Component {
  constructor(props) {
    super(props);

    const { match: { params: { workspaceName } } } = this.props;
    this.state = {
      workspaceName,
    };
  }

  componentDidMount() {
    this.props.getWorkspace(this.state.workspaceName);
  }

  render() {
    const { loading, workspace, match: { path } } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <Switch>
        <Route path={`${path}/login`} component={Login} />
        <Route path={`${path}/register`} component={Register} />
      </Switch>
    );
  }
}

export default WorkspaceApp;
