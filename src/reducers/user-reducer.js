import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, SET_AUTH_TOKEN, CLEAR_AUTH_TOKEN, UPDATE_INCOME_REQUEST, UPDATE_INCOME_ERROR, UPDATE_INCOME_SUCCESS} from '../actions/user-actions';

const initialState = {
  authToken: null, // authToken !== null does not mean it has been validated
  info: null,
  loading: false,
  error: null,
};

export const userReducer = (state=initialState, action) => {
  switch (action.type) {

    case SET_AUTH_TOKEN:
    return Object.assign({}, state, {authToken: action.authToken});

    case CLEAR_AUTH_TOKEN:
    return Object.assign({}, state, {authToken: null, info: null});

    case REGISTER_REQUEST:
    return Object.assign({}, state, {loading: true});

    case REGISTER_ERROR:
    return Object.assign({}, state, {loading: false, error: action.error});

    case REGISTER_SUCCESS:
    return Object.assign({}, state, {loading: false});

    case LOGIN_REQUEST:
    return Object.assign({}, state, {loading: true});

    case LOGIN_ERROR:
    return Object.assign({}, state, {loading: false, error: action.error});

    case LOGIN_SUCCESS:
    return Object.assign({}, state, {loading: false, info: action.info});

    case UPDATE_INCOME_REQUEST:
    return Object.assign({}, state, {loading: true});

    case UPDATE_INCOME_ERROR:
    return Object.assign({}, state, {loading: false, error: action.error});

    case UPDATE_INCOME_SUCCESS:
      return Object.assign({}, state, {info: {...state.info, income: action.income.income}});

    default:
      return state;
  }
};

export default userReducer;