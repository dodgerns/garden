const { initializeApp } = require("firebase/app");

const { getDatabase, ref, get } = require("firebase/database");

class ConnectionDB {
    constructor(){
        const firebaseConfig = {
            apiKey:process.env.apiKey,
            authDomain:process.env.authDomain,
            databaseURL:process.env.databaseURL,
            projectId:process.env.projectId,
            storageBucket:process.env.storageBucket,
            messagingSenderId:process.env.messagingSenderId,
            appId:process.env.appId,
          };
        this.app = initializeApp(firebaseConfig);
        this.database = getDatabase(this.app);
        this.dataPlants = {};
        this.messages = {};
        this.rooms = [];
    }
    async updateData(){
        const plantDataRef = ref(this.database);
        try {
            const snapshot = await get(plantDataRef);

            if (snapshot.exists()) {
                const data = snapshot.val();
                this.dataPlants = data.plants;
                this.messages = data.messages;
                this.rooms = Object.keys(this.dataPlants);
            } else {
                console.log("No data available");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    getDataPlant(){
        return this.dataPlants;
    }
    getMessagePlant(){
        return this.messages;
    }
    getRooms(){
        return this.rooms;
    }


}
module.exports = ConnectionDB;
