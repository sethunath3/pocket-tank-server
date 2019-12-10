var IDGenerator = require('./../Generics/RandomGenerator.js').IDGenerator;

const PlayerAuthStatus = {
    AUTH_PENDING : 'auth_pending',
    AUTH_PROGRESS : 'auth_progress',
    AUTH_SUCCES : 'auth_success'
}

class Auth
{

    constructor(socket){
        this.socket =socket;
        this.playerState = PlayerAuthStatus.AUTH_PENDING;
    }

    StartAuth()
    {
        // this.socket.emit('AUTH_SUCCESSFULL');
        var self = this;
        this.socket.on('USER_AUTH_REQUEST',this.OnAuthREquest);
    }

    OnAuthREquest(msg)
    {
            // self.playerState = PlayerAuthStatus.AUTH_PROGRESS;
            console.log("auth request accepted:" + msg['PLAYER_ID']);

            var generator = new IDGenerator();
            var id = generator.Generate();
            
            console.log("id is:" + id)
            
            this.emit('AUTH_SUCCESSFULL', { 'PLAYER_ID': id});
            // self.playerState = PlayerAuthStatus.AUTH_SUCCES;
        
    }
}

module.exports = {Auth: Auth};