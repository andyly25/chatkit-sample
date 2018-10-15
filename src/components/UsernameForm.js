// to collect the user's name

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { usernameOnSubmit, usernameOnChange } from '../actions/UsernameForm';

class UsernameForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: '',
  //   }
  //   this.usernameOnSubmit = this.usernameOnSubmit.bind(this);
  //   this.usernameOnChange = this.usernameOnChange.bind(this);
  // }

  // usernameOnSubmit(e) {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state.username);
  // }

  // usernameOnChange(e) {
  //   this.setState({ username: e.target.value });
  // }


  //asynchronous action 
  //dispatch action, and then make ajax post call to server if correct
  //async of redux section
  usernameOnSubmit(e) {
    e.preventDefault();
    console.log('PROPPSS', this.props);
    console.log('STATEE', this.state);
    this.props.dispatch(usernameOnSubmit(e));
    console.log('SOME USERNAME', this.props);
    this.props.onSubmit(this.props.username);
  }

  usernameOnChange(e) {
    console.log('curr target', e.currentTarget.value);
    this.props.dispatch(usernameOnChange(e.currentTarget.value));
  }


  render() {
    console.log('username', this.props)
    return (
      <div>
        <div>
          <h2>What is your username?</h2>
          <form onSubmit={(e) => this.usernameOnSubmit(e)}> 
            <input
              type="text"
              placeholder="full name"
              onChange={(e) => this.usernameOnChange(e)}
            />
            <input type="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username
});

// export default UsernameForm;
export default connect(mapStateToProps)(UsernameForm);
