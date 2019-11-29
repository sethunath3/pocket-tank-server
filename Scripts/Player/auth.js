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
            if(msg['PLAYER_ID'] != '0')
            {
                this.playerID = msg['PLAYER_ID'];
                console.log('welcome back ' + msg['PLAYER_NAME']);
            }
            else
            {
                this.playerID = '1234';
                //return random generated player id
            }
            console.log(typeof(this));
            this.emit('AUTH_SUCCESSFULL');
            // self.playerState = PlayerAuthStatus.AUTH_SUCCES;
            // return this.playerID;
        
    }
}

module.exports = {Auth: Auth};