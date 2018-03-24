import { connect } from 'react-redux';
import Login from '../components/Login';
import { loginUser } from '../modules/actions';

export default connect(
  (state) => ({ ...state.auth }),
  (dispatch) => ({
    loginUser: (form) => dispatch(loginUser(form)),
  }),
)(Login);
