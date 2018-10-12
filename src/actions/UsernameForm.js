export const USERNAME_ON_SUBMIT = 'USERNAME_ON_SUBMIT';
export const usernameOnSubmit = (event) => ({
  type: USERNAME_ON_SUBMIT,
  event
})

export const USERNAME_ON_CHANGE = 'USERNAME_ON_CHANGE';
export const usernameOnChange = (inputvalue) => ({
  type: USERNAME_ON_CHANGE,
  inputvalue
})
