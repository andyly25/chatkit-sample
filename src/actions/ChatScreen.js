export const SEND_TYPING_EVENT = 'SEND_TYPING_EVENT';
export const sendTypingEvent = () => ({
  type: SEND_TYPING_EVENT
})

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessage = (text) => ({
  type: SEND_MESSAGE,
  text
})

