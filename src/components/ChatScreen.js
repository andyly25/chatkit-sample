// once username submitted, we want to transition to chat screen

import React, { Component } from 'react';
// import chatkit
import Chatkit from '@pusher/chatkit';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import TypingIndicator from './TypingIndicator';
import WhosOnlineList from './WhosOnlineList'
// import css
import './ChatScreen.css'

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
    console.log('Someone is typing');
  }

  // when SendMessage form is submitted, we call this
  sendMessage(text) {
    this.state.currentUser.sendMessage({
      text,
      roomId: this.state.currentRoom.id
    })
  }

  // add scroll to bottom of chatmessage later
  // https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react
  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount () {
    // note to self, to store instance locator and key in safe spot
    // also a config file for url
    // instantiate chatkit chatmanager with given fields
    // with token provder pointing to /authenticate route defined earlier
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:5dff3a4f-a6e4-4036-b974-d09e53dc0568',
      userId: this.props.currentUsername,
      connectionTimeout: 20000,
      tokenProvider: new Chatkit.TokenProvider({
        url: 'http://localhost:3001/authenticate'
      }),
      logger: {
        verbose: console.log,
        debug: console.log,
        info: console.log,
        warn: console.log,
        error: console.log,
      }
    })

    // once initialized, call connect which happens async and a Promise returned
    // get a current user obj that represents current connected user
    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser });
        // call subscribeToRoom on curr user, takes event handler onNewMessage
        // called in real tiem each time new message arrives
        // call forceUpdate which tells React to evaluate currentRoom.users and update the UI
        return currentUser.subscribeToRoom({
          roomId: 18192681,
          messageLimit: 100,
          hooks: {
            onNewMessage: message => {
              console.log(`${message} sent`);
              this.setState({
                messages: [...this.state.messages, message],
              })
            },
            onUserStartedTyping: user => {
              console.log(`User ${user.name} started typing`);
              this.setState({
                usersWhoAreTyping: [...this.state.usersWhoAreTyping, user.name],
              })
            },
            onUserStoppedTyping: user => {
              console.log(`User ${user.name} stopped typing`);
              this.setState({
                usersWhoAreTyping: this.state.usersWhoAreTyping.filter(
                  username => username !== user.name
                ),
              })
            },
            onUserCameOnline: () => this.forceUpdate(),
            onUserWentOffline: () => this.forceUpdate(),
            onUserJoined: () => this.forceUpdate()
          }
        })
      })
      .then(currentRoom => {
        this.setState({ currentRoom })
      })
      .catch(error => console.error('error', error));
  }

  render() {
    return (
      <div className="container">
        <div className="chatContainer">
          <aside className="onlineListContainer">
            <WhosOnlineList 
              currentUser={this.state.currentUser}
              users={this.state.currentRoom.users}
            />
          </aside>
          <section className="chatListContainer">
            <MessageList
              messages={this.state.messages}
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
