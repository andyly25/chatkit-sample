
import {
  USERNAME_ON_SUBMIT,
  USERNAME_ON_CHANGE
} from '../actions/UsernameForm';

const initialState = {
  username: ''
}

export default (state = initialState, action) => {
  if (action.type === ON_SUBMIT) {
    // e.preventDefault();
    // this.props.onSubmit(this.state.username);
    action.e.preventDefault();
    this.props.onSubmit(state.username);
  }

  if (action.type === ON_CHANGE) {
    // this.setState({ username: e.target.value });
    object.assign({}, state, { username: action.e.target.value });
  }
}