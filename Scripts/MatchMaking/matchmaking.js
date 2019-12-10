// var Player = require('./../Player/player.js').Player;
var GamePlay = require('./../GamePlay/gameplay.js').Gameplay;

var MatchMaking = (function () {
    var instance;
 
    function createInstance() {
        var object = new MatchMaker();
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

class MatchMaker
{
    constructor()
    {
        this.playerQueue = {};
    }

    AddPlayerToQ(player)
    {
        if(this.playerQueue[0] != null)
        {
            console.log("2nd Player added to queue");
            new GamePlay(this.playerQueue[0], player);
            this.playerQueue[0] = null;
        }
        else
        {
            console.log("Player added to queue");
            this.playerQueue[0] = player;
        }
    }
}

module.exports = {MatchMaking : MatchMaking}