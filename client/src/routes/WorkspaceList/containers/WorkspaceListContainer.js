import { connect } from 'react-redux';
import Workspace from '../components/WorkspaceList';

export default connect(
  ({ workspace }) => ({ ...workspace }),
  (dispatch) => ({
  }),
)(Workspace);
