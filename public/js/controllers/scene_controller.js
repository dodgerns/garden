export default class SceneController{
    constructor(config){
        this.configIds = config.configIds;
        this.plantsInformation = config.plantsInformation;
        this.mainScene = config.mainScene;
        this.communication = config.communication;
    }
    start(){
        this.addNfts();
    }
    async addNfts() {
        try {
            const plants = await this.plantsInformation.getNftPlants();
            const idScene = this.configIds.idScene;
            this.mainScene.addNfts(
                idScene,
                plants,
                (room, showMessage) => this.joinRoom(room, showMessage),
                (message) => this.sendMessage(message),
                () => this.leaveRoom()
            );
        } catch (error) {
            console.error('Error:', error);
        }
    }
    joinRoom(room, showMessage){
        this.communication.joinRoom(room, showMessage);
    }
    sendMessage(message){
        this.communication.sendMessage(message);
    }
    receiveMessage(showMessage){
        this.communication.receiveMessage(showMessage);
    }
    leaveRoom(){
        this.communication.leaveRoom();
    }
    addEntity(){}
    onChangeOrientation(){
        screen.orientation.addEventListener("change", (event) => {
            const type = event.target.type;
            const angle = event.target.angle;
            console.log(`ScreenOrientation change: ${type}, ${angle} degrees.`);
          });
    }
}
