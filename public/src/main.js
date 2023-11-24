import configGame from "./config/config_game.js";
import configSocket from "./config/config_socket.js";
import SceneController from "./controllers/scene_controller.js";
import GameScene from "./scenes/game_scene.js";
import Emitter from "./emitters/emitters.js"
import Qr from "./qr/qr.js";
import SocketConnection from "./connection/socket_connection.js";
import PlantInformation from "./information/plant_information.js";

export default class Main{
    constructor(){
        const emitterManager = new Emitter(new Phaser.Events.EventEmitter())
        const config = {
            'emitter': emitterManager,
            'gameScene': new GameScene(emitterManager),
            'qrReader': new Qr(),
            'socketConnection': new SocketConnection(null),
            'plantInformation': new PlantInformation()
        }

        const game = new Phaser.Game(configGame);
        game.scene.add('GameScene', config.gameScene, true);
        const sceneController = new SceneController(config);
    }
}

const main = new Main();
