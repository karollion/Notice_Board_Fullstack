import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import isloadingReducer from './isLoadingRedux';
import noticesReducer from './noticesRedux';
import usersReducer from './usersRedux';

const subreducers = {
  notices: noticesReducer,
  loading: isloadingReducer,
  user: usersReducer,
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;