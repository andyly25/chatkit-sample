import React, { Component } from 'react';
import { connect } from 'react-redux';

import { onSubmit, onChange } from '../actions/SendMessageForm';

import './SendMessageForm.css'

class SendMessageForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: ''
  //   }
  //   this.onSubmit = this.onSubmit.bind(this);
  //   this.onChange = this.onChange.bind(this);
  // }

  // onSubmit(e) {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state.text);
  //   this.setState({ text: '' });
  // }

  // onChange(e) {
  //   this.setState({ text: e.target.value });
  //   if (this.props.onChange) {
  //     this.props.onChange();
  //   }
  // }

  onSubmit(e) {
    this.props.dispatch(onSubmit(e));
  }

  onChange(e) {
    this.props.dispatch(onChange(e));
  }

  render() {
    return (
      <div className="sendmessage-container">
        <div>
          <form className="sendmessage-form" onSubmit={this.onSubmit}>
            <input 
              type="text"
              className="sendmessage-input"
              placeholder="Type message here then hit Enter"
              onChange={this.onChange}
              value={this.props.text}
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.text
});

// const mapDispatchToProps = dispatch => ({
//   onSubmit: e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.text);
//     this.setState({ text: '' });
//   },
//   onChange: e => {
//     this.setState({ text: e.target.value });
//     if (this.props.onChange) {
//       this.props.onChange();
//     }
//   }
// })

// export default SendMessageForm;
export default connect(mapStateToProps)(SendMessageForm);
