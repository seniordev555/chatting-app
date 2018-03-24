export const APP_USER_REQUEST = 'APP_USER_REQUEST';
export const APP_USER_SUCCESS = 'APP_USER_SUCCESS';
export const APP_USER_ERROR = 'APP_USER_ERROR';

const initialState = {
  loading: true,
  currentUser: null,
  error: null,
};

const app = (state = initialState, action) => {
  switch(action.type) {
    case APP_USER_REQUEST:
      return { ...state, loading: true, currentUser: null, error: null };

    case APP_USER_SUCCESS:
      return { ...state, loading: false, currentUser: action.payload };

    case APP_USER_ERROR:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default app;
