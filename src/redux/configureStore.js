import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  missions: missionsReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
