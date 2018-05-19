import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from '../utils/normalize-errors';

export const FETCH_BILLS_REQUEST = 'FETCH_BILLS_REQUEST';
export const fetchBillsRequest = () => ({
  type: FETCH_BILLS_REQUEST,
});

export const FETCH_BILLS_ERROR = 'FETCH_BILLS_ERROR';
export const fetchBillsError = () => ({
  type: FETCH_BILLS_ERROR,
});

export const FETCH_BILLS_SUCCESS = 'FETCH_BILLS_SUCCESS';
export const addBillRequest = list => ({
  type: FETCH_BILLS_SUCCESS,
  list
});

export const fetchBills = () => (dispatch, getState) => {
  let authToken;

  const getToken = new Promise(function(resolve, reject) {
      localStorage.getItem('authToken') ? resolve(authToken = localStorage.getItem('authToken')) : reject('Could not find authToken!') ;
    });

  getToken
    .then(() => fetch(`${API_BASE_URL}/bills`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  }))
  .then(res => normalizeResponseErrors(res))
  .then(res => console.log('response:', res))
  .catch(err => dispatch(fetchBillsError(err)));
};