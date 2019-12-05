var auth = require('./auth.js');
var Auth = auth.Auth;
var MatchMaking = require('./../MatchMaking/matchmaking.js').MatchMaking;

class Player{
    constructor(socket)
    {
        this.socket = socket;
    }

    Init() 
    {
        this.playerAuth = new Auth(this.socket);
        this.socket.emit("test");
        this.playerAuth.StartAuth();
        `this.socket.on('INITIATE_MATCH_MAKING', ()=>{
            this.AddToMatchMaking()});`

        this.socket.emit('CONNECTION_ESTABLISHED');
    }

    AddToMatchMaking()
    {
        console.log('registering player to matchmaking');
        MatchMaking.getInstance().AddPlayerToQ(this);
    }

    MatchMakingSuccessFul()
    {
        console.log('checkpoint reached');
        this.socket.emit('MATCHMAKING_SUCCESSFULL');
    }
}

module.exports = {Player : Player};