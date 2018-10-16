import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './actions/index';
import reducers from './reducers/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers, {
    screen: ''
  },
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

export default store;