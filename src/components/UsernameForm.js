// to collect the user's name

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { usernameOnSubmit, usernameOnChange } from '../actions/UsernameForm';

class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
    this.usernameOnSubmit = this.usernameOnSubmit.bind(this);
    this.usernameOnChange = this.usernameOnChange.bind(this);
  }

  usernameOnSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  }

  usernameOnChange(e) {
    this.setState({ username: e.target.value });
  }

  // usernameOnSubmit(e) {
  //   this.props.dispatch(usernameOnSubmit(e));
  // }

  // usernameOnChange(e) {
  //   this.props.dispatch(usernameOnChange(e));
  // }


  render() {
    return (
      <div>
        <div>
          <h2>What is your username?</h2>
          <form onSubmit={this.usernameOnSubmit}> 
            <input
              type="text"
              placeholder="full name"
              onChange={this.usernameOnChange}
            />
            <input type="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default UsernameForm;
// export default connect()(UsernameForm);
