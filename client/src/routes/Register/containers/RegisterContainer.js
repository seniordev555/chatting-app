import { connect } from 'react-redux';
import Register from '../components/Register';
import { registerUser } from '../modules/actions';

export default connect(
  ({ register }) => ({ ...register }),
  (dispatch) => ({
    registerUser: (form) => dispatch(registerUser(form)),
  }),
)(Register);
