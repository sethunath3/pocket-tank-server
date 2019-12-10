var auth = require('./auth.js');
var Auth = auth.Auth;
var MatchMaking = require('./../MatchMaking/matchmaking.js').MatchMaking;

class Player{
    constructor(socket)
    {
        this.player_id = 0;
        this.socket = socket;
    }

    GetSocket()
    {
        return this.socket;
    }

    GetPlayerID()
    {
        return this.player_id;
    }

    Init() 
    {
        this.playerAuth = new Auth(this.socket);
        this.socket.emit("test");
        this.player_id = this.playerAuth.StartAuth();
        this.socket.on('INITIATE_MATCH_MAKING', ()=>{
            this.AddToMatchMaking()});

        this.socket.emit('CONNECTION_ESTABLISHED');
    }

    AddToMatchMaking()
    {
        console.log('registering player to matchmaking');
        MatchMaking.getInstance().AddPlayerToQ(this);
    }

    MatchMakingSuccessFul()
    {
        this.socket.emit('MATCHMAKING_SUCCESSFULL');
    }
}

module.exports = {Player : Player};