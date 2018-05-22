import { FETCH_BILLS_REQUEST, FETCH_BILLS_SUCCESS, FETCH_BILLS_ERROR, CREATE_BILL_REQUEST, CREATE_BILL_ERROR, CREATE_BILL_SUCCESS, CLEAR_BILLS, DELETE_BILL_REQUEST, DELETE_BILL_ERROR, DELETE_BILL_SUCCESS} from '../actions/bills-actions';

const initialState = {
  list: null,
  loading: false,
  error: null,
}

export const billsReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_BILLS_REQUEST:
      return Object.assign({}, state, {loading: true});

    case FETCH_BILLS_ERROR:
      return Object.assign({}, state, {loading: false, error: action.error});

    case FETCH_BILLS_SUCCESS:
      return Object.assign({}, state, {loading: false, list: action.list});

    case CREATE_BILL_REQUEST:
      return Object.assign({}, state, {loading: true});

    case CREATE_BILL_ERROR:
      return Object.assign({}, state, {loading: false, error: action.error});

    case CREATE_BILL_SUCCESS:
      return {...state, list: [...state.list, action.bill]};

    case CLEAR_BILLS:
      return Object.assign({}, state, {list: null, loading: false, error: null});

    case DELETE_BILL_REQUEST:
      return Object.assign({}, state, {loading: true});

    case DELETE_BILL_ERROR:
      return Object.assign({}, state, {loading: false, error: action.error});

    // case DELETE_BILL_SUCCESS:
    //   return {...state, list: [...state.list, action.bill]};

    default:
      return state;
  }
}

export default billsReducer;