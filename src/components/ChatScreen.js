// once username submitted, we want to transition to chat screen

import React, { Component } from 'react';
// import chatkit
import Chatkit from '@pusher/chatkit';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import TypingIndicator from './TypingIndicator';
// import css
// import './ChatScreen.css'

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentUser: {},
      currentRoom: {},
      messages: [],
      usersWhoAreTyping: []
    }
    this.sendMessage = this.sendMessage.bind(this);
    this.sendTypingEvent = this.sendTypingEvent.bind(this);
  }

  sendTypingEvent() {
    this.state.currentUser
      .isTypingIn({ roomId: this.state.currentRoom.id })
      .catch(error => console.error('error', error));
  }

  // when SendMessage form is submitted, we call this
  sendMessage(text) {
    this.state.currentUser.sendMessage({
      text,
      roomId: this.state.currentRoom.id
    })
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
    // get a current user obj that represents current connected user
    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser });
        // call subscribeToRoom on curr user, takes event handler onNewMessage
        // called in real tiem each time new message arrives
        return currentUser.subscribeToRoom({
          roomId: 18192681,
          messageLimit: 100,
          hooks: {
            onNewMessage: message => {
              this.setState({
                messages: [...this.state.messages, message],
              })
            },
            onUserStartedTyping: user => {
              // typing indicators from chatkit listeners
              this.setState({
                usersWhoAreTyping: [...this.state.usersWhoAreTyping, user.name]
              })
            },
            onUserStoppedTyping: user => {
              this.setState({
                usersWhoAreTyping: this.state.usersWhoAreTyping.filter(
                  username => username !== user.name
                )
              })
            }
          }
        })
      })
      .then(currentRoom => {
        this.setState({ currentRoom })
      })
      .catch(error => console.error('error', error));
  }

  render() {

    // return (
    //   <div className="container">
    //     <div className="chatContainer">
    //       <aside className="onlineListContainer">
    //         <h2>Who's online PLaceHolder</h2>
    //       </aside>
    //       <section className="chatListContainer">
    //         <MessageList 
    //           messages={this.state.messages}
    //         />
    //         <SendMessageForm onSubmit={this.sendMessage} />
    //       </section>
    //     </div>
    //   </div>
    // );
    const styles = {
      container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      },
      chatContainer: {
        display: 'flex',
        flex: 1,
      },
      whosOnlineListContainer: {
        width: '15%',
        padding: 20,
        backgroundColor: '#2c303b',
        color: 'white',
      },
      chatListContainer: {
        padding: 20,
        width: '85%',
        display: 'flex',
        flexDirection: 'column',
      },
    }

    return (
      <div style={styles.container}>
        <div style={styles.chatContainer}>
          <aside style={styles.whosOnlineListContainer}>
            <h2>Who's online PLaceHolder</h2>
          </aside>
          <section style={styles.chatListContainer}>
            <MessageList
              messages={this.state.messages}
              style={styles.chatList}
            />
            <TypingIndicator usersWhoAreTyping={this.state.usersWhoAreTyping} />
            <SendMessageForm
              onSubmit={this.sendMessage}
              onChange={this.sendTypingEvent}
            />
          </section>
        </div>
      </div>
    )

  }
}

export default ChatScreen;
