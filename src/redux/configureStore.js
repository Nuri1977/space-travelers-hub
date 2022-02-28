import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducerRockets from './rockets/reducerRockets';

const reducer = combineReducers({
  reducerRockets,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
