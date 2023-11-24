export default class SceneController{
    constructor(config){
        this.scene = config.gameScene;
        this.sceneEmitters = config.emitter;
        this.qrReader = config.qrReader;
        this.socketConnection = config.socketConnection;
        this.plantInformation = config.plantInformation;
        setInterval(() => {
            this.update();
        }, 2000);
    }
    update(){
        this.captureImage();
        this.checkQr();
        this.updatePlantInformation();
        this.updateGameScene();
    }
    captureImage(){
        this.sceneEmitters.eventEmitter('capture_image');
    }
    checkQr(){
        const capturedImage = this.scene.getCapturedImage();
        if(capturedImage){
            this.qrReader.scanQr(capturedImage);
        }
    }
    updatePlantInformation(){
        const plantInformation = this.socketConnection.getPlantInformation(this.qrReader.getIdPlant());
        this.plantInformation.addPlantInformation(plantInformation);
    }
    updateGameScene(){
        this.sceneEmitters.eventEmitter('add_information', this.plantInformation);
    }
}
