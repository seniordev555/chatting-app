import { connect } from 'react-redux';
import WorkspaceList from '../components/WorkspaceList';
import {
  getWorkspaceListRequest,
  createWorkspaceRequest,
  changeTab,
} from '../modules/actions';

export default connect(
  ({ workspaceList }) => ({ ...workspaceList }),
  dispatch => ({
    getWorkspaceListRequest: () => dispatch(getWorkspaceListRequest()),
    createWorkspace: values => dispatch(createWorkspaceRequest(values)),
    changeTab: tab => dispatch(changeTab(tab)),
  }),
)(WorkspaceList);
