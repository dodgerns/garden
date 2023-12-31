import ConnectionApiRest from "./connection/connection_api_rest.js";
import PlantsInformation from "./information/plants_information.js";
import MainScene from "./scenes/main_scene.js";
import SceneController from "./controllers/scene_controller.js";
import CommunicationRoom from "./connection/communication_room.js";

class Main{
    constructor(){
        const connection = new ConnectionApiRest();
        const socketIo = io();
        const config = {
            'plantsInformation': new PlantsInformation(connection),
            'mainScene': new MainScene(),
            'communication': new CommunicationRoom(socketIo)
        }
        this.sceneController = new SceneController(config);
    }
    start(){
        this.sceneController.start();
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const main = new Main();
    main.start();
});