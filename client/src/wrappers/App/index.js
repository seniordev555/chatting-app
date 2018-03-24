import React, { Fragment } from 'react';
import ReduxToastr from 'react-redux-toastr';
import { Switch, Redirect } from 'react-router-dom';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import GuestRoute from '../../route-helpers/GuestRoute';
import PrivateRoute from '../../route-helpers/PrivateRoute';

import Login from '../../routes/Login';
import Register from '../../routes/Register';

import Dashboard from '../../routes/Dashboard';

const App = () => (
  <Fragment>
    <Switch>
      <GuestRoute exact path="/login" name="Login" component={Login} />
      <GuestRoute exact path="/register" name="Register" component={Register} />
      <PrivateRoute exact path="/" name="Dashboard" component={Dashboard} />
      <Redirect from="*" to="/login" />
    </Switch>
    <ReduxToastr
      timeOut={3000}
      preventDuplicates
      position="bottom-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
    />
  </Fragment>
);

export default App;
