export const WORKSPACE_LIST_GET_REQUEST = 'WORKSPACE_LIST_GET_REQUEST';
export const WORKSPACE_LIST_GET_SUCCESS = 'WORKSPACE_LIST_GET_SUCCESS';
export const WORKSPACE_LIST_GET_ERROR = 'WORKSPACE_LIST_GET_ERROR';

const initialState = {
  loading: false,
  error: null,
  workspaces: null,
};

const channel = (state = initialState, action) => {
  switch(action.type) {
    case WORKSPACE_LIST_GET_REQUEST:
      return { ...state, loading: true, error: null };

    case WORKSPACE_LIST_GET_SUCCESS:
      return { ...state, loading: false, workspaces: action.payload };

    case WORKSPACE_LIST_GET_ERROR:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default channel;
