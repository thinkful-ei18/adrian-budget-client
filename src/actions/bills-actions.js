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
export const fetchBillsSuccess = list => ({
  type: FETCH_BILLS_SUCCESS,
  list
});

export const fetchBills = () => (dispatch, getState) => {
  let authToken;

  const getToken = new Promise(function(resolve, reject) {
      localStorage.getItem('authToken') ? resolve(authToken = localStorage.getItem('authToken')) : reject('Could not find authToken!') ;
    });

  dispatch(fetchBillsRequest());
  getToken
    .then(() => fetch(`${API_BASE_URL}/bills`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  }))
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(bills => dispatch(fetchBillsSuccess(bills)))
  .catch(err => dispatch(fetchBillsError(err)));
};

export const CREATE_BILL_REQUEST = 'CREATE_BILL_REQUEST';
export const createBillRequest = () => ({
  type: CREATE_BILL_REQUEST,
});

export const CREATE_BILL_ERROR = 'CREATE_BILL_ERROR';
export const createBillError = error => ({
  type: CREATE_BILL_ERROR,
  error
});

export const CREATE_BILL_SUCCESS = 'CREATE_BILL_SUCCESS';
export const createBillSuccess = () => ({
  type: CREATE_BILL_SUCCESS,
});

export const createBill = bill => (dispatch, getState) => {
  dispatch(createBillRequest());
  return fetch(`${API_BASE_URL}/bills`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => dispatch(createBillError(err)));
};