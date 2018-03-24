import { connect } from 'react-redux';
import PrivateApp from '../components/PrivateApp';
import { loadProfile, logoutUser } from '../modules/actions';

export default connect(
  ({ app }) => ({ ...app }),
  (dispatch) => ({
    loadProfile: () => dispatch(loadProfile()),
    logoutUser: () => dispatch(logoutUser()),
  }),
)(PrivateApp);
