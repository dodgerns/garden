export default class PlantsInformation{
    constructor(connection){
        this.connection = connection;
    }
    getNftPlants(){
        return this.connection.getPlants();
    }
}
