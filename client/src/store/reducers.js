import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import auth from '../routes/Login/modules';
import register from '../routes/Register/modules';
import app from '../wrappers/PrivateApp/modules';
import channel from '../routes/Channel/modules';
import workspace from '../routes/Workspace/modules';

const rootReducer = combineReducers({
  router: routerReducer,
  form: formReducer,
  toastr: toastrReducer,
  auth,
  register,
  app,
  channel,
  workspace,
});

export default rootReducer;
