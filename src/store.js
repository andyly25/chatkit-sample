import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// import reducers
import appReducer from './reducers/App';
import chatReducer from './reducers/ChatScreen';
import sendMessageReducer from './reducers/SendMessageForm';
import usernameReducer from './reducers/UsernameForm';

const store = createStore(
  combineReducers({
    app: appReducer,
    chatScreen: chatReducer,
    sendMessageForm: sendMessageReducer,
    usernameForm: usernameReducer
  }),
  applyMiddleware(thunk)
);

// export default createStore(reducer);
export default store;