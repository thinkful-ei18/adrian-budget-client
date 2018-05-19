import { normalizeResponseErrors } from '../utils/normalize-errors';
import { loadAuthToken } from '../local-storage';

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

export const fetchBills = () => dispatch => {
  const authToken = localStorage.getItem('authToken');

  return (
    fetch(`${API_BASE_URL}/bills`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => console.log('response:', res))
  );
};