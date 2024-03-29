# Backend Chat

## Install

```bash
make install
```

## Run

```sh
$ make start
# curl http://localhost:5001/api/v1/data
```

## Install npm-package

```bash
npm i @hexlet/chat-server
```

## Run npm-package

```bash
npx start-server
```

## Usage

```
Usage: start-server start-server [OPTIONS]

Options:
  -v, --version            output the version number
  -a, --address <address>  address to listen on (default: "0.0.0.0")
  -p, --port <port>        port to listen on (default: 5001)
  -s, --static <path>      path to static assets files (default: "./build")
  -h, --help               display help for command
```

## REST API

### Create new user

`POST /api/v1/signup`

```javascript
axios.post('/api/v1/signup', { username: 'newuser', password: '123456' }).then((response) => {
  console.log(response.data); // => { token: ..., username: 'newuser' }
});
```

### Login

`/api/v1/login`

```javascript
axios.post('/api/v1/login', { username: 'admin', password: 'admin' }).then((response) => {
  console.log(response.data); // => { token: ..., username: 'admin' }
});
```

### Get channels

`GET /api/v1/channels`

```javascript
axios.get('/api/v1/channels', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
}).then((response) => {
  console.log(response.data); // =>[{ id: '1', name: 'general', removable: false }, ...]
});
```

### Add channel

`POST /api/v1/channels`

```javascript
const newChannel = { name: 'new channel' };
axios.post('/api/v1/channels', newChannel, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
}).then((response) => {
  console.log(response.data); // => { id: '3', name: 'new channel', removable: true }
});
```

### Edit channel

`PATCH /api/v1/channels/:id`

```javascript
const editedChannel = { name: 'new name channel' };
axios.patch('/api/v1/channels/3', editedChannel, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
}).then((response) => {
  console.log(response.data); // => { id: '3', name: 'new name channel', removable: true }
});
```

### Remove channel

`DELETE /api/v1/channels/:id`

```javascript
axios.delete('/api/v1/channels/3', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
}).then((response) => {
  console.log(response.data); // => { id: '3' }
});
```

### Get messages

`GET /api/v1/messages`

```javascript
axios.get('/api/v1/messages', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
}).then((response) => {
  console.log(response.data); // =>[{ id: '1', body: 'text message', channelId: '1', username: 'admin }, ...]
});
```

### Add message

`POST /api/v1/messages`

```javascript
const newMessage = { body: 'new message', channelId: '1', username: 'admin };
axios.post('/api/v1/messages', newMessage, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
}).then((response) => {
  console.log(response.data); // => { id: '1', body: 'new message', channelId: '1', username: 'admin }
});
```

### Edit message

`PATCH /api/v1/messages/:id`

```javascript
const editedMessage = { body: 'new body message' };
axios.patch('/api/v1/messages/1', editedMessage, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
}).then((response) => {
  console.log(response.data); // => { id: '1', body: 'new body message', channelId: '1', username: 'admin }
});
```

### Remove message

`DELETE /api/v1/messages/:id`

```javascript
axios.delete('/api/v1/messages/3', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
}).then((response) => {
  console.log(response.data); // => { id: '3' }
});
```

## Socket event subscribes

```javascript
// subscribe new messages
socket.on('newMessage', (payload) => {
  console.log(payload); // => { body: "new message", channelId: 7, id: 8, username: "admin" }
});
```

```javascript
// subscribe new channel
socket.on('newChannel', (payload) => {
  console.log(payload) // { id: 6, name: "new channel", removable: true }
});
```

```javascript
// subscribe remove channel
socket.on('removeChannel', (payload) => {
  console.log(payload); // { id: 6 };
});
```

```javascript
// subscribe rename channel
socket.on('renameChannel', (payload) => {
  console.log(payload); // { id: 7, name: "new name channel", removable: true }
});
```

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/assets/master/images/hexlet_logo128.png)](https://hexlet.io/?utm_source=github&utm_medium=link&utm_campaign=project-js-chat-backend)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet](https://hexlet.io/?utm_source=github&utm_medium=link&utm_campaign=project-js-chat-backend).

See most active contributors on [hexlet-friends](https://friends.hexlet.io/).