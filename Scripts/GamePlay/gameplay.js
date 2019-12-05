var player = require('./../Player/player.js');
var Player = player.Player;

class Gameplay
{

    constructor(player1, player2)
    {
        console.log("entering gameplay");
        this.players = {player1, player2};
        this.AcknowledgePlayers();
    }

    AcknowledgePlayers()
    {
        player1.MatchMakingSuccessFul();
        player2.MatchMakingSuccessFul();
    }
}
module.exports = {Gameplay:Gameplay};