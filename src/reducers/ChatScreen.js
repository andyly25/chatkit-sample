import {
  SEND_TYPING_EVENT,
  SEND_MESSAGE
} from '../actions/ChatScreen';

const initialState = {
  currentUser: {},
  currentRoom: {},
  messages: [],
  usersWhoAreTyping: []
}

export default function reducer(state = initialState, action) {
  if (action.type === SEND_TYPING_EVENT) {
    state.currentUser
      .isTypingIn({ roomId: state.currentRoom.id })
      .catch(error => console.error('error', error));
  } 

  if (action.type === SEND_MESSAGE) {
    state.currentUser.sendMessage({
      action.text,
      roomId: state.currentRoom.id
    })
  }

  return state;
}