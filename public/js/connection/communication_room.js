export default class CommunicationRoom {
    constructor(socketIo){
        this.socketIo = socketIo;
        this.room = null;
        this.showMessage = null;

        this.socketIo.on('message', (message) => {
            this.showMessage(message);
        });
    }
    joinRoom(room, showMessage){
        this.leaveRoom();
        this.room = room;
        this.showMessage = showMessage;
        this.socketIo.emit('joinRoom', this.room);
    }
    sendMessage(message){
        if(this.room){
            this.socketIo.emit('sendMessage', { message, room: this.room });
        }
    }
    leaveRoom(){
        if(this.room){
            this.socketIo.emit('leaveRoom');
            console.log("salio de la sala ", this.room);
            this.room = null;
            this.showMessage = null;
        }
    }
}
