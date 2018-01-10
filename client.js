var WebSocket = require('ws')
var connection = new WebSocket('ws://localhost:9030');

connection.onopen = function () {
  /*var data = {
    to: "sec-websocket-identifier",
    message: 'hello from client 1'
};*/
connection.send("HELLO");
};

// Log errors
connection.onerror = function (error) {
  console.error('WebSocket Error ' + error);
};

// Log messages from the server
connection.onmessage = function (e) {
   console.log(e.data);
};




