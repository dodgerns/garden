class Rooms {
  constructor(ioSocket, connection) {
    this.ioSocket = ioSocket;
    this.connection = connection;
    this.validateRooms = [];
    this.messages = {};
    this.configRooms();
    this.configSocket();
  }
  async configRooms(){
    this.validateRooms = this.connection.getRooms();
    this.messagePlant = await this.connection.getMessagePlant();
  }
  configSocket(){
    this.connectionSocket();
    
  }
  connectionSocket(){
    this.ioSocket.on('connection', (socket) => {
      this.joinRoom(socket);
      this.messageRoom(socket);
      this.leaveRoom(socket);
      this.disconnectSocket(socket);
    });
  }
  joinRoom(socket){
    socket.on('joinRoom', (room) => {
      if(this.validateRooms.includes(room)){
        socket.join(room);
      }
  });
  }
  messageRoom(socket){
    socket.on('sendMessage', (data) => {
      if(this.validateRooms.includes(data.room)){
        const messagesPlant = this.messagePlant[data.room]['entities'];
        const messageEntity = messagesPlant.find(entity => entity.id === data.message);
        if(messageEntity){
          this.ioSocket.to(data.room).emit('message', messageEntity);
        }
      }
  });
  }
  leaveRoom(socket){
    socket.on('leaveRoom', (room) => {
      socket.leave(room);
    });
  }
  disconnectSocket(socket){
    socket.on('disconnect', () => {
      console.log('Usuario desconectado');
    });
  }
}

module.exports = Rooms;
