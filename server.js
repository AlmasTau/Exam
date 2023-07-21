const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const users = [];
const messages = [];

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/chat.html');
});

app.get('/private_chat', (req, res) => {
  res.sendFile(__dirname + '/private_chat.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/registration.html');
});

app.post('/register', express.urlencoded({ extended: true }), (req, res) => {
});

app.post('/login', express.urlencoded({ extended: true }), (req, res) => {
});


http.listen(3000, () => {
  console.log('Server is running on port 3000');
});
