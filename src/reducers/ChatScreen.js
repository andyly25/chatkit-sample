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
  // sendTypingEvent() {
  //   this.state.currentUser
  //     .isTypingIn({ roomId: this.state.currentRoom.id })
  //     .catch(error => console.error('error', error));
  //   console.log('Someone is typing');
  // }
  if (action.type === SEND_TYPING_EVENT) {
    state.currentUser
      .isTypingIn({ roomId: state.currentRoom.id })
      .catch(error => console.error('error', error));
  } 

  // sendMessage(text) {
  //   this.state.currentUser.sendMessage({
  //     text,
  //     roomId: this.state.currentRoom.id
  //   })
  // }
  if (action.type === SEND_MESSAGE) {
    console.log("someaction",action);
    state.currentUser.sendMessage({
      text: action.text,
      roomId: state.currentRoom.id
    })
  }

  return state;
}