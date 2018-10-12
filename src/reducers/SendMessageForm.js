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
    action.event.preventDefault();
    action.onSubmit(state.text);
    // this.setState({ text: '' });
    Object.assign({}, state, { text: ''})
  }

  if (action.type === ON_CHANGE) {
    // this.setState({ text: e.target.value });
    // if (this.props.onChange) {
    //   this.props.onChange();
    // }
    Object.assign({}, state, { text: action.event.target.value });
    if (action.onChange) {
      action.onChange();
    }
  }
  return state;
}