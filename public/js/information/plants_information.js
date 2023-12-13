export default class PlantsInformation{
    constructor(connection){
        this.connection = connection;
    }
    async getNftPlants() {
        try {
            const plantsData = await this.connection.getPlants();
            return plantsData;
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }
}
