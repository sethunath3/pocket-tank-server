var player = require('./../Player/player.js');
var Player = player.Player;

class Gameplay
{
    constructor(player1, player2)
    {
        console.log("entering gameplay");
        // console.log(player1);
        player1.MatchMakingSuccessFul();
        // player1.emit('MATCHMAKING_SUCCESSFULL');
        player2.MatchMakingSuccessFul();
        // player2.emit('MATCHMAKING_SUCCESSFULL');
    }
}
module.exports = {Gameplay:Gameplay};