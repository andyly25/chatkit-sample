export const ON_USERNAME_SUBMITTED = 'ON_USERNAME_SUBMITTED';
export const onUsernameSubmitted = (username) => ({
  type: ON_USERNAME_SUBMITTED,
  username
})

// export const fetchUserData = () => (dispatch, getState) => {
//   console.log("GET STATES", getState());
//   fetch('http://localhost:3001/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ username })
//   })
//     .then(response => {
//       this.setState({
//         currentUsername: username,
//         currentScreen: 'ChatScreen'
//       })
//     })
//     .catch(error => console.error('error', error));
// }