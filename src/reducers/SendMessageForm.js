import {
  ON_SUBMIT,
  ON_CHANGE
} from '../actions/SendMessageForm'

const initialState = {
  text: ''
}

export default (state = initialState, action) => {
  if (action.type === ON_SUBMIT) {
    // e.preventDefault();
    // this.props.onSubmit(this.state.text);
    // this.setState({ text: '' });
    action.e.preventDefault();
    props.onSubmit(this.state.text);
    // this.setState({ text: '' });
    Object.assign({}, state, { text: ''})
  }

  if (action.type === ON_CHANGE) {
    // this.setState({ text: e.target.value });
    // if (this.props.onChange) {
    //   this.props.onChange();
    // }
    object.assign({}, state, { text: e.target.value });
    if (props.onChange) {
      props.onChange();
    }
  }
}