
import {
  USERNAME_ON_SUBMIT,
  USERNAME_ON_CHANGE
} from '../actions/UsernameForm';

const initialState = {
  username: ''
}

export default (state = initialState, action) => {
  console.log("UN reducer action", action);
  console.log('REDUCER STATE', state);
  if (action.type === USERNAME_ON_SUBMIT) {
    // e.preventDefault();
    // this.props.onSubmit(this.state.username);
    // action.event.preventDefault();
    // action.onSubmit(state.username);
    console.log('something submit', action.event);
    console.log('something state', state);
    console.log('OBJESTC', Object.assign({}, state, { username: state.username }));
    return state.username;
  }

  if (action.type === USERNAME_ON_CHANGE) {
    // this.setState({ username: e.target.value });
    return Object.assign({}, state, { username: action.inputvalue });
  }
  return state;
}