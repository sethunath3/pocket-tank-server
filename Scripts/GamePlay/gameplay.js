var Player = require('./../Player/player.js').Player;
var IDGenerator = require('./../Generics/RandomGenerator.js').IDGenerator;

class Gameplay
{

    constructor(player1, player2)
    {
        this.gameplayInProgress = false;

        console.log("entering gameplay");
        this.players = [player1, player2];

        this.CreateAndAddToRoom();
        this.AcknowledgePlayers();
        this.EnableGameplayActionsForPlayers();

        player1.GetSocket().emit('TURN_ACTIVE');
        player2.GetSocket().emit('TURN_INACTIVE');


    }

    CreateAndAddToRoom()
    {
        var generator = new IDGenerator();
        // this.roomId = generator.Generate();
        this.roomId = "room1";
        this.players.forEach(player => {
            player.GetSocket().join(this.roomId);
        });
    }

    AcknowledgePlayers()
    {
        this.players.forEach(player => {
            player.MatchMakingSuccessFul();
        });
    }

    EnableGameplayActionsForPlayers()
    {
        this.players.forEach(player => {
            player.GetSocket().on('ANGLE_CHANGED', this.OnAngleChanged);
            player.GetSocket().on('FIRED', (parameters)=>{
                this.OnFire(player, parameters);
            });
        });
    }

    OnAngleChanged(player, parameters)
    {
        console.log('changing angle');
        this.broadcast.to(id).emit('ENEMY_ANGLE_CHANGED', parameters);
        
    }

    OnFire(player, parameters)
    {
        console.log('firing done ' + parameters["FIRING_ANGLE"]);
        console.log("Emiting to room:" + this.roomId);
        player.GetSocket().broadcast.to(this.roomId).emit('ENEMY_FIRED', parameters);
        player.GetSocket().emit('TURN_INACTIVE');
        player.GetSocket().broadcast.to(this.roomId).emit('TURN_ACTIVE');
    }
}
module.exports = {Gameplay:Gameplay};