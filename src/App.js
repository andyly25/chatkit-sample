import React, { Component } from 'react';
// import username component
import UsernameForm from './components/UsernameForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUsername: ''
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
          currentUsername: username
        })
      })
      .catch(error => console.error('error', error));
  }

  render() {
    // render UsernameForm and hook up onUsernameSubmitted event handler
    // When this is called, we send POST request to /users route defined
    return <UsernameForm onSubmit={this.onUsernameSubmitted} />
  }
}

export default App
