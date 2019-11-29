var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var player = require('./Scripts/Player/player.js')
var Player = player.Player;

io.on('connection', function(socket){
    console.log("new player connected");

    var newPlayer = new Player(socket);
    newPlayer.Init();
    
    socket.on('disconnect', function(){
        console.log("player disconnected");
    })
})

http.listen(4567, function(){
    console.log('Listening on port 4567');
})