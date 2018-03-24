import { toastr } from 'react-redux-toastr';
import { push } from 'react-router-redux';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './index';
import { anonymousRequest } from '../../../utils/apiCaller';

export const loginUser = (form) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const response = await anonymousRequest('post', '/auth/login', { body: form });
      localStorage.setItem('chatting_app_token', JSON.stringify(response.data.token));
      dispatch({ type: LOGIN_SUCCESS });
      dispatch(push('/'));
      toastr.success(`Welcome ${response.data.user.username}!`);
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        error,
      });
      toastr.error(error.response.data.message);
    }
  };
};
