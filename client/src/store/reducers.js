import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import auth from '../routes/Login/modules';
import register from '../routes/Register/modules';
import app from '../wrappers/PrivateApp/modules';

const rootReducer = combineReducers({
  router: routerReducer,
  form: formReducer,
  toastr: toastrReducer,
  auth,
  register,
  app,
});

export default rootReducer;
