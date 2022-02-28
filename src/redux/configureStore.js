import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';
import reducerRockets from './rockets/rockets';

const reducer = combineReducers({
  missions: missionsReducer,
  rockets: reducerRockets,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
