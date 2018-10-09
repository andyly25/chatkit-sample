// once username submitted, we want to transition to chat screen

import React, { Component } from 'react';
// import chatkit
import Chatkit from '@pusher/chatkit';

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentUser: {}
    }
  }

  componentDidMount () {
    // note to self, to store instance locator and key in safe spot
    // also a config file for url
    // instantiate chatkit chatmanager with given fields
    // with token provder pointing to /authenticate route defined earlier
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:5dff3a4f-a6e4-4036-b974-d09e53dc0568',
      userId: this.props.currentUsername,
      tokenProvider: new Chatkit.TokenProvider({
        url: 'http://localhost:3001/authenticate'
      })
    })

    // once initialized, call connect which happens async and a Promise returned
    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser });
      })
      .catch(err => console.error('error', err));
  }

  render() {
    return (
      <div>
        <h1>Chat</h1>
      </div>
    );
  }
}

export default ChatScreen;
