import { API_BASE_URL } from '../config';
import { SubmissionError } from 'redux-form';
import { normalizeResponseErrors } from '../utils/normalize-errors';
import { saveAuthToken, clearAuthToken, saveUserCredentials } from '../local-storage';
import { clearBills } from './bills-actions';
import jwtDecode from 'jwt-decode';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const REGISTER_ERROR = 'REGISTER_ERROR';
export const registerError = error => ({
  type: REGISTER_ERROR,
  error,
});

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const register = user => dispatch => {
  dispatch(registerRequest());
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(() => {
      dispatch(registerSuccess());
      dispatch(login(user.username, user.password))
  })
    .catch(err => {
      const { reason, message } = err;
      dispatch(registerError(err));

      if (reason === 'ValidationError') {
        return Promise.reject(
          new SubmissionError({
            _error: message,
          })
        );
      }
    });
};

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const loginError = error => ({
  type: LOGIN_ERROR,
  error,
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = info => ({
  type: LOGIN_SUCCESS,
  info
});

export const login = (username, password) => dispatch => {
  dispatch(loginRequest());
  return (
    fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(({ authToken }) => storeAuthToken(authToken, dispatch))
      .catch(err => {
        const { status } = err.error;
        const message =
        status === 422 ? err.message : 'Unable to login, please try again';

        dispatch(loginError(err));

        return Promise.reject(
          new SubmissionError({
            _error: message,
          })
        );
      })
  );
};

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken,
});

export const CLEAR_AUTH_TOKEN = 'CLEAR_AUTH_TOKEN';
export const clearToken = () => ({
  type: CLEAR_AUTH_TOKEN
});

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthToken = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  // dispatch(setToken(authToken)); // I'm storing the token in localstorage only.
  dispatch(loginSuccess(decodedToken.user));
  saveAuthToken(authToken);
  saveUserCredentials(decodedToken.user);
};

export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(loginRequest());
  const authToken = getState().user.authToken;
  return fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      // Provide our existing token as credentials to get a new one
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ authToken }) => storeAuthToken(authToken, dispatch))
    .then(() => dispatch(loginSuccess()))
    .catch(err => {
      // We couldn't get a refresh token because our current credentials
      // are invalid or expired, or something else went wrong, so clear
      // them and sign us out
      dispatch(loginError(err));
      dispatch(clearToken());
      clearAuthToken(authToken);
    });
};

export const logout = () => (dispatch) => {
  dispatch(clearBills());
  dispatch(clearToken());
  clearAuthToken();
}

export const UPDATE_INCOME_REQUEST = 'UPDATE_INCOME_REQUEST';
export const updateIncomeRequest = () => ({
  type: UPDATE_INCOME_REQUEST,
});

export const UPDATE_INCOME_ERROR = 'UPDATE_INCOME_ERROR';
export const updateIncomeError = error => ({
  type: UPDATE_INCOME_ERROR,
  error
});

export const UPDATE_INCOME_SUCCESS = 'UPDATE_INCOME_SUCCESS';
export const updateIncomeSuccess = income => ({
  type: UPDATE_INCOME_SUCCESS,
  income
});

export const updateIncome = income => (dispatch, getState) => {
  // const authToken = localStorage.getItem('authToken');

  dispatch(updateIncomeRequest());
    // return fetch(`${API_BASE_URL}/users/income`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${authToken}`
    //   },
    //   body: JSON.stringify(income)
    // })
    // .then(res => normalizeResponseErrors(res))
    // .then(res => {
    //   if (!res.ok) {
    //     return dispatch(updateIncomeError(res));
    //   } else {
    //     return dispatch(updateIncomeSuccess(income));
    //   }
    // })
    // .catch(err => dispatch(updateIncomeError(err)));
    dispatch(updateIncomeSuccess(income));
};