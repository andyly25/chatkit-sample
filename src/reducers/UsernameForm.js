
import {
  USERNAME_ON_SUBMIT,
  USERNAME_ON_CHANGE
} from '../actions/UsernameForm';

const initialState = {
  username: ''
}

console.log("UN reducer", USERNAME_ON_SUBMIT);
export default (state = initialState, action) => {
  console.log("UN reducer action", action);
  if (action.type === USERNAME_ON_SUBMIT) {
    // e.preventDefault();
    // this.props.onSubmit(this.state.username);
    action.event.preventDefault();
    action.onSubmit(state.username);
  }

  if (action.type === USERNAME_ON_CHANGE) {
    // this.setState({ username: e.target.value });
    Object.assign({}, state, { username: action.event.target.value });
  }
}