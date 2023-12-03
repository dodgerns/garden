export default class PlantsInformation{
    constructor(connection){
        this.connection = connection;
    }
    async getNftPlants() {
        try {
            const plantsData = await this.connection.getPlants(); // Esperar a que se resuelva la Promesa
            return plantsData; // Retornar los datos obtenidos
        } catch (error) {
            console.error('Error:', error);
            // Manejar el error apropiadamente (lanzar una excepción, retornar un valor por defecto, etc.)
            return null;
        }
    }
}
