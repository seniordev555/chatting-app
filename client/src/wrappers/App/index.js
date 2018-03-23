import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

const App = () => {

  return (
    <Fragment>
      <div>hello world</div>
      <ReduxToastr
        timeOut={3000}
        preventDuplicates
        position="bottom-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
      />
    </Fragment>
  );
};

export default connect(
  state => ({ ...state.router }),
  {}
)(App);
