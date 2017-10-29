const express = require('express');
const app = express();
const config = require(`./config/${process.env.NODE_ENV}.js`);
/*
specified at startup in terminal
NODE_ENV = development node app.js
*/


if( !config.PORT){
  process.exit(1);
}
//one process to one port.
//port should not be hardcoded.

app.use( express.static(_dirname + 'public') );

var currentCount = 0;

app.get('/api/conter', ( req, res ) => {
  res.json( {
   counter: currentCount
  } );
} );

app.get('/api/counter/decrement',( req, res )=>{
  --currentCount;
  res.json({
    status:200
  });
});

app.get('/api/counter/increment',( req, res )=>{
  ++currentCount;
  res.json({
    status:200
  });
});


app.listen( config.PORT, function(server, args){
  console.log( config.PORT );
} );