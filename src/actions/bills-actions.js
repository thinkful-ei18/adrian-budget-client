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
export const createBillSuccess = bill => ({
  type: CREATE_BILL_SUCCESS,
  bill
});

export const createBill = bill => (dispatch, getState) => {
  const authToken = localStorage.getItem('authToken');

  dispatch(createBillRequest());
  return fetch(`${API_BASE_URL}/bills`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(bill)
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(bill => dispatch(createBillSuccess(bill)))
  .catch(err => dispatch(createBillError(err)));
};

export const CLEAR_BILLS = 'CLEAR_BILLS';
export const clearBills = () => ({
  type: CLEAR_BILLS
});

export const DELETE_BILL_REQUEST = 'DELETE_BILL_REQUEST';
export const deleteBillRequest = () => ({
  type: DELETE_BILL_REQUEST,
});

export const DELETE_BILL_ERROR = 'DELETE_BILL_ERROR';
export const deleteBillError = error => ({
  type: DELETE_BILL_ERROR,
  error
});

export const DELETE_BILL_SUCCESS = 'DELETE_BILL_SUCCESS';
export const deleteBillSuccess = id => ({
  type: DELETE_BILL_SUCCESS,
  id
});

export const deleteBill = id => (dispatch, getState) => {
  const authToken = localStorage.getItem('authToken');

    dispatch(deleteBillRequest());
    return fetch(`${API_BASE_URL}/bills/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      if (!res.ok) {
        return dispatch(deleteBillError(res));
      } else {
        return dispatch(deleteBillSuccess(id));
      }
    })
    .catch(err => dispatch(deleteBillError(err)));
};

export const EDIT_BILL_REQUEST = 'EDIT_BILL_REQUEST';
export const editBillRequest = () => ({
  type: EDIT_BILL_REQUEST,
});

export const EDIT_BILL_ERROR = 'EDIT_BILL_ERROR';
export const editBillError = error => ({
  type: EDIT_BILL_ERROR,
  error
});

export const EDIT_BILL_SUCCESS = 'EDIT_BILL_SUCCESS';
export const editBillSuccess = (bill, index) => ({
  type: EDIT_BILL_SUCCESS,
  bill,
  index
});

export const editBill = (bill, index, id) => (dispatch, getState) => {
  const authToken = localStorage.getItem('authToken');

  dispatch(editBillRequest());
    return fetch(`${API_BASE_URL}/bills/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify(bill)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      if (!res.ok) {
        return dispatch(editBillError(res));
      } else {
        return dispatch(editBillSuccess(bill, index));
      }
    })
    .catch(err => dispatch(editBillError(err)));
};

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
  const authToken = localStorage.getItem('authToken');

  dispatch(updateIncomeRequest());
    return fetch(`${API_BASE_URL}/users/income`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify(income)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      if (!res.ok) {
        return dispatch(updateIncomeError(res));
      } else {
        return dispatch(updateIncomeSuccess(income));
      }
    })
    .catch(err => dispatch(editBillError(err)));
};