import configIdsHtml from "./config/config_ids_html.js";
import ConnectionBase from "./connection/connection_base.js"
import PlantsInformation from "./information/plants_information.js"
import MainScene from "./scenes/main_scene.js"
import SceneController from "./controllers/scene_controller.js"

class Main{
    constructor(){
        const connection = new ConnectionBase();
        const config = {
            'configIds': configIdsHtml,
            'plantsInformation': new PlantsInformation(connection),
            'mainScene': new MainScene()
        }
        this.sceneController = new SceneController(config);
    }
    start(){
        this.sceneController.start();
    }
    onMarkerFound(){
        console.log('onMarkerFound');
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const main = new Main();
    main.start();
    window.onMarkerFound = main.onMarkerFound;
});