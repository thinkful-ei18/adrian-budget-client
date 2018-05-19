import { FETCH_BILLS_REQUEST, FETCH_BILLS_SUCCESS, FETCH_BILLS_ERROR} from '../actions/bills-actions';

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

    default:
      return state;
  }
}