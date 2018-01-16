// server.js
var Server = require('ws').Server;
var port = process.env.PORT || 9030;
var ws = new Server({port: port});



ws.on('connection', function(w){
  
  w.on('message', function(msg){
    d = new Date();
    console.log(d + ': ' + msg);
    
    const fs = require('fs');

   // add a line to a lyric file, using appendFile
   fs.appendFile('server.log', '\n' + d + ': ' + msg, (err) => {  
       if (err) throw err;
   });

    w.send('ACK: '+msg);

  });
  
  w.on('close', function() {
    console.log('closing connection');
  });

});

