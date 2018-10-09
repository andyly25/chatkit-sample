const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// import chatkit
const ChatKit = require('pusher-chatkit-server');

const app = express()

// initiate our own chatkit
const chatkit = new ChatKit.default({
  instanceLocator: 'v1:us1:5dff3a4f-a6e4-4036-b974-d09e53dc0568',
  key: '8735902e-5985-4858-a619-7f8ecb5dea3c:KHi93UxzBwxTdqbUUrFzk51UTDktYKfvVBOsjai2bEI='
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// we then take a user and create a chatkit user through chatkit instance
app.post('/users', (req, res) => {
  const { username } = req.body;
  chatkit
    .createUser({
      id: username,
      name: username
    })
    .then(() => res.sendStatus(201))
    .catch(error => {
      if (error.error_type === 'services/chatkit/user_already_exists') {
        res.sendStatus(200);
      } else {
        res.status(error.status).json(error);
      }
    });
});

const PORT = 3001
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})
