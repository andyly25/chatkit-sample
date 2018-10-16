// to collect the user's name

import React, { Component } from 'react';

class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
  }

  usernameOnSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  }

  usernameOnChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <h2>What is your username?</h2>
          <form onSubmit={this.usernameOnSubmit.bind(this)}> 
            <input
              type="text"
              placeholder="full name"
              onChange={this.usernameOnChange.bind(this)}
            />
            <input type="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default UsernameForm;
