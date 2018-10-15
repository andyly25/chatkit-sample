import {
  ON_USERNAME_SUBMITTED
} from '../actions/App';

const initialState = {
  currentUsername: '',
  currentScreen: ''
};

export default function reducer(state = initialState, action) {
  if (action.type === ON_USERNAME_SUBMITTED) {
    // onUsernameSubmitted(username) {
    //   fetch('http://localhost:3001/users', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ username })
    //   })
    //     .then(response => {
    //       this.setState({
    //         currentUsername: username,
    //         currentScreen: 'ChatScreen'
    //       })
    //     })
    //     .catch(error => console.error('error', error));
    // }

    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: action.username })
    })
      .then(response => {
        this.setState({
          currentUsername: action.username,
          currentScreen: 'ChatScreen'
        })
      })
      .catch(error => console.error('error', error));
  }

  return state;
}