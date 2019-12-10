class IDGenerator
{
    constructor()
    {
        this.length = 8;
        this.timestamp = +new Date;
    }

    GetRandomInt( min, max ) 
    {
        return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }

    Generate() 
    {
        var ts = this.timestamp.toString();
        var parts = ts.split( "" ).reverse();
        var id = "";
        
        for( var i = 0; i < this.length; ++i ) {
           var index = this.GetRandomInt( 0, parts.length - 1 );
           id += parts[index];	 
        }
        
        return id;
    }
}

module.exports = {IDGenerator:IDGenerator};