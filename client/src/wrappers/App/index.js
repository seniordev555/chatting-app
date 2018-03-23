import React, { Fragment } from 'react';
import ReduxToastr from 'react-redux-toastr';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import Login from '../../routes/Login';
import Register from '../../routes/Register';

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/login" name="Login" component={Login} />
      <Route exact path="/register" name="Register" component={Register} />
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
