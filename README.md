# pocket-tank-server

Multiplayer server for the pocket tank clone. Node.js is used for the implementation of the server.

## Tools used
* [Socket.io](https://socket.io/) is used for handling each player as separate sockets.

The match maker algorithm is implemented using singleton pattern. Matched players are put into a newly created game room.
