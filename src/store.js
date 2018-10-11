import { createStore, applyMiddleware, combineReducers } from 'redux';

// import reducers
import chatReducer from './reducers/ChatScreen';
import sendMessageReducer from './reducers/SendMessageForm';
import usernameReducer from './reducers/UsernameForm';

const store = createStore(
  combineReducers({
    chatScreen: chatReducer,
    sendMessageForm: sendMessageReducer,
    usernameForm: usernameReducer
  }),
  applyMiddleware(thunk)
);

// export default createStore(reducer);
export default store;