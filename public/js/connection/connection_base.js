export default class ConnectionBase{
    constructor(){
    }
    async getPlants() {
        try {
            const response = await fetch('/nfts');
            if (!response.ok) {
                throw new Error('Error al obtener los datos');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }
}
