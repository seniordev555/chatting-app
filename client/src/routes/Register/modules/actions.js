import { toastr } from 'react-redux-toastr';
import { push } from 'react-router-redux';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from './index';
import { anonymousRequest } from '../../../utils/apiCaller';

export const registerUser = (form) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      await anonymousRequest('post', '/auth/register', { body: form });
      dispatch({ type: REGISTER_SUCCESS });
      dispatch(push('/login'));
      toastr.success('User registered successfully');
    } catch (error) {
      dispatch({
        type: REGISTER_ERROR,
        error,
      });
      toastr.error(error.response.data.message);
    }
  };
};
