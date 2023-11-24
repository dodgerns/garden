export default class PlantInformation{
    constructor(){
        this.information = {};
    }
    addPlantInformation(plantInformation){
        if(plantInformation){
            this.information[plantInformation.id] = {
                message: plantInformation.message,
                width: plantInformation.width,
                height: plantInformation.height
            }
        }
    }
    removePlantInformation(id){
        if(this.information[id]){
            delete this.information[id];
        }
    }
    clearPlantInformation(){
        Object.entries(this.information).forEach(([id]) => {
            delete this.information[id];
        });
    }
}
