import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import createReducer from './reducers';

// const logger = createLogger();

const middlewares = [
  thunk,
  promiseMiddleware,
  // logger,
];

const configureStore = (initialState = Object.assign({})) => {
  const enhancer = applyMiddleware(...middlewares);
  const store = createStore(createReducer(), initialState, enhancer);

  if (module.hot) {
    module.hot.accept('reducers', () => {
      store.replaceReducer(createReducer());
    });
  }

  return store;
};

export default configureStore;
