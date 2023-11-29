export default class SceneController{
    constructor(config){
        this.configIds = config.configIds;
        this.plantsInformation = config.plantsInformation;
        this.mainScene = config.mainScene;
    }
    start(){
        this.addNfts();
    }
    addNfts(){
        const plants = this.plantsInformation.getNftPlants();
        const idScene = this.configIds.idScene;
        this.mainScene.addNfts(idScene, plants);
    }
    addEntity(){}
}
