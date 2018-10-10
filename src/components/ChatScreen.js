// once username submitted, we want to transition to chat screen

import React, { Component } from 'react';
// import chatkit
import Chatkit from '@pusher/chatkit';
import MessageList from './MessageList';
// import css
import './ChatScreen.css'

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentUser: {},
      currentRoom: {},
      messages: []
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
        return currentUser.subscribeToRoom({
          roomId: 18192681,
          messageLimit: 100,
          hooks: {
            onNewMessage: message => {
              this.setState({
                messages: [...this.state.messages, message]
              })
            }
          }
        })
      })
      .then(currentRoom => {
        this.setState({ currentRoom })
      })
      .catch(err => console.error('error', err));
  }

  render() {

    return (
      <div className="container">
        <div className="chatContainer">
          <aside className="onlineListContainer">
            <h2>Who's online PLaceHolder</h2>
          </aside>
          <section className="chatListContainer">
            <MessageList 
              messages={this.state.messages}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default ChatScreen;
