const appReducer = (state, action) => {
  switch(action.type) {
    case 'GET_USERNAME':
      return Object.assign({}, {
        username: action.username,
        screen: 'UsernameForm'
      })
    case 'SET_USERNAME':
      return Object.assign({}, {
        username: action.username,
        screen: 'ChatScreen'
      })
    default:
      return state;
  }
};

module.exports = appReducer;