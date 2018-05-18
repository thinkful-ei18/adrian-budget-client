import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/user-reducer';

const store = createStore(
  combineReducers({
    form: formReducer,
    currentUser: userReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
