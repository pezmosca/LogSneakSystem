// server.js
var Server = require('ws').Server;
var port = process.env.PORT || 9030;
var ws = new Server({port: port});



ws.on('connection', function(w){
  
  w.on('message', function(msg){
    d = new Date();
    console.log(d + ': ' + msg);
    w.send('ACK: '+msg);
  });
  
  w.on('close', function() {
    console.log('closing connection');
  });

});

