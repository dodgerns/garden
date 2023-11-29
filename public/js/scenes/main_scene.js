export default class MainScene{
    constructor(){
    }
    setScene(){}
    addNfts(sceneId, nfts){
        const scene = document.querySelector(sceneId);
        const entriesPlants = Object.entries(nfts);

        for (const [keyPlant, value] of entriesPlants) {
            
            const a_nft = value['a-nft'];
            const entities = value['entities'];
            const texts = value['texts'];
            const narrative = value['narrative'];
            
            const nftElement = document.createElement('a-nft');
            const entriesNft = Object.entries(a_nft);
            for (const [key, value] of entriesNft) {
                nftElement.setAttribute(key, value);
            }
            nftElement.addEventListener('markerFound', () => {
                entities.forEach((entity) => {
                    if(!document.getElementById(entity.id)){
                        const entityElement = document.createElement('a-entity');
                        const entriesEntity = Object.entries(entity);
                        for (const [key, value] of entriesEntity) {
                            entityElement.setAttribute(key, value);
                            nftElement.appendChild(entityElement);
                        }
                    }
                });
                texts.forEach((text, index) => {
                    if(!document.getElementById(text.id)){
                        const textElement = document.createElement('div');
                        textElement.classList.add('description', 'comicBalloon', 'positionComicBallon'+index);
                        textElement.textContent = text.value;
                        document.body.appendChild(textElement);
                    }
                });
                if(!document.getElementById(narrative.id)){
                    const narrativeElement = document.createElement('div');
                    narrativeElement.classList.add('description', 'narrative');
                    narrativeElement.textContent = narrative.value;
                    document.body.appendChild(narrativeElement);
                }
              });
            scene.appendChild(nftElement);
            nftElement.addEventListener('markerLost', () => {
                const deleteElements = document.querySelectorAll('.description');
                deleteElements.forEach(function(element) {
                    element.parentNode.removeChild(element);
                });
            });
        }
    }
    addEntities(sceneId, entityId){

    }
    addText(sceneId, text){

    }
}
