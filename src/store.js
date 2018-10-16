import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './actions/index';
import reducers from './reducers/index';
// import thunk from 'redux-thunk';

// import reducers
// import appReducer from './reducers/App';
// import chatReducer from './reducers/ChatScreen';
// import sendMessageReducer from './reducers/SendMessageForm';
// import usernameReducer from './reducers/UsernameForm';

// const store = createStore(
//   combineReducers({
//     app: appReducer,
//     chatScreen: chatReducer,
//     sendMessageForm: sendMessageReducer,
//     usernameForm: usernameReducer
//   }),
//   applyMiddleware(thunk)
// );

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers, {
    screen: ''
  },
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

// export default createStore(reducer);
export default store;