import React, { Component } from 'react';
// import username component
import UsernameForm from './components/UsernameForm';
// import ChatScreen
import ChatScreen from './components/ChatScreen';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUsername: '',
      currentScreen: 'currUsernameScreen'
    }
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this);
  }

  onUsernameSubmitted(username) {
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username })
    })
      .then(response => {
        this.setState({
          currentUsername: username,
          currentScreen: 'ChatScreen'
        })
      })
      .catch(error => console.error('error', error));
  }

  render() {
    // we conditionally render screen based on this.state.currentScreen
    if (this.state.currentScreen === 'currUsernameScreen') {
      // render UsernameForm and hook up onUsernameSubmitted event handler
      // When this is called, we send POST request to /users route defined
      return <UsernameForm onSubmit={this.onUsernameSubmitted} />
    }
    if (this.state.currentScreen === 'ChatScreen') {
      return <ChatScreen currentUsername={this.state.currentUsername} />
    }
  }
}

export default App
