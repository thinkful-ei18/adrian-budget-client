import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from '../actions/user-actions';

const initialState = {
  authToken: null, // authToken !== null does not mean it has been validated
  info: null,
  loading: false,
  error: null,
};

export const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    return Object.assign({}, state, {loading: true});

    case REGISTER_ERROR:
    return Object.assign({}, state, {loading: false, error: action.error});

    case REGISTER_SUCCESS:
    return Object.assign({}, state, {loading: false});

    default:
      return state;
  }
}