import { connect } from 'react-redux';
import Workspace from '../components/Workspace';
import {
  getWorkspaceListRequest,
  createWorkspaceRequest,
  changeTab,
} from '../modules/actions';

export default connect(
  ({ workspace }) => ({ ...workspace }),
  dispatch => ({
    getWorkspaceListRequest: () => dispatch(getWorkspaceListRequest()),
    createWorkspace: values => dispatch(createWorkspaceRequest(values)),
    changeTab: tab => dispatch(changeTab(tab)),
  }),
)(Workspace);
