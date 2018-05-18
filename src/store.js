import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/user-reducer';
import { loadAuthToken } from './local-storage';
import { loginSuccess, setToken } from './actions/user-actions';

const store = createStore(
  combineReducers({
    form: formReducer,
    currentUser: userReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

const authToken = loadAuthToken();
const user = JSON.parse(localStorage.getItem('user'));

if (authToken) {
  store.dispatch(setToken(authToken));
  store.dispatch(loginSuccess(user));
}

export default store;
