// server.js
var Server = require('ws').Server;
var port = process.env.PORT || 9030;
var ws = new Server({port: port});



ws.on('connection', function(w){

  w.on('message', function(msg){
    const fs = require('fs');

   
    //RECIVED LOG
    d = new Date();
    console.log(d + ': ' + msg);
    fs.appendFile('recived.log', '\n' + d + ': ' + msg, (err) => {  
        if (err) throw err;
    });

    //SENT LOG
    d = new Date();
    w.send('ACK: ' + msg);
    fs.appendFile('sent.log', '\n' + d + 'ACK: ' + msg, (err2) => {
       if (err2) throw err2;
     });

  });

  w.on('close', function() {
    console.log('closing connection');
  });

});
