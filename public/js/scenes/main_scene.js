export default class MainScene{
    constructor(){
    }
    addNfts(sceneId, nfts, joinRoom, sendMessage, leaveRoom){
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
                this.addEntities(nftElement, entities);
                const textContainer = document.createElement('div');
                textContainer.classList.add('text');
                this.addTexts(textContainer, texts);
                this.addNarrative(textContainer, narrative);
                joinRoom(keyPlant, (message)=>{
                    this.addEntity(nftElement, message);
                });
                window.addEventListener('mousedown', ()=>sendMessage("hola"));
                window.addEventListener('touchstart', ()=>sendMessage("hola"));
                sendMessage("hola");
              });
            scene.appendChild(nftElement);
            nftElement.addEventListener('markerLost', () => {
                leaveRoom();
                const deleteElements = document.querySelectorAll('.text');
                deleteElements.forEach(function(element) {
                    element.parentNode.removeChild(element);
                });
            });
        }
    }
    addEntities(nftElement, entities){
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
    }
    addTexts(textContainer, texts){
        texts.forEach((text, index) => {
            if(!document.getElementById(text.id)){
                const textElement = document.createElement('div');
                textElement.classList.add('comicBalloon', 'positionComicBallon'+index);
                textElement.textContent = text.value;
                textContainer.appendChild(textElement);
            }
        });
        document.body.appendChild(textContainer);
    }
    addNarrative(textContainer, narrative){
        if(!document.getElementById(narrative.id)){
            const narrativeElement = document.createElement('div');
            narrativeElement.classList.add('narrative');
            narrativeElement.textContent = narrative.value;
            textContainer.appendChild(narrativeElement);
        }
    }
    addEntity(nftElement, entity){
        if(!document.getElementById(entity.id)){
            const entityElement = document.createElement('a-entity');
            const entriesEntity = Object.entries(entity);
            for (const [key, value] of entriesEntity) {
                entityElement.setAttribute(key, value);
                nftElement.appendChild(entityElement);
            }
        }
        const idMessage = entity.id;
        setTimeout(() => {
            const elementToRemove = document.getElementById(idMessage);
            if (elementToRemove) {
                elementToRemove.parentNode.removeChild(elementToRemove);
            }
        }, 3000);
    }
}
