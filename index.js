var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 5000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/VirusGame/index.html');
});


/*
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('VirusGame', __dirname + '/VirusGame');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('VirusGame/index')
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
*/
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});