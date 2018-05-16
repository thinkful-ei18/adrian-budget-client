import { API_BASE_URL } from '../config';
import { SubmissionError } from 'redux-form';
import { normalizeResponseErrors } from '../utils/normalize-errors';
import { saveAuthToken, clearAuthToken, saveUserCredentials } from '../local-storage';
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
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    // .then(() => dispatch(login(user.username, user.password)))
    .catch(err => {
      const { reason, message } = err;

      if (reason === 'ValidationError') {
        return Promise.reject(
          new SubmissionError({
            _error: message,
          })
        );
      }
    });
};
