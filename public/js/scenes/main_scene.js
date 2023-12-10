import { changePosition, getRandomOffset } from '../lib/utils.js';

export default class MainScene{
    constructor(){}
    addNfts(nfts, joinRoom, sendMessageSocket, leaveRoom){
        this.addContentBody(nfts, joinRoom, sendMessageSocket, leaveRoom);
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
    addContentBody(nfts, joinRoom, sendMessageSocket, leaveRoom){
        const body = document.body;

        const loader = this.createArjsLoader();
        const scene = this.createScene();
        const camera = this.createCamera();
        const nftsElements = this.createNfts(nfts, joinRoom, sendMessageSocket, leaveRoom);
        nftsElements.forEach(entities => {
            scene.appendChild(entities);
          });
        scene.appendChild(camera);
        body.appendChild(loader);
        body.appendChild(scene);
    }
    createArjsLoader(){
        const loader = document.createElement('div');
        loader.className = 'arjs-loader';
        loader.innerHTML = `<div>Loading, please wait...</div>`;
        return loader;
    }
    createScene(){
        const scene = document.createElement('a-scene');

        scene.id = 'scene';
        scene.setAttribute('vr-mode-ui', 'enabled: false;');
        scene.setAttribute('renderer', 'logarithmicDepthBuffer: true;');
        scene.setAttribute('embedded', '');
        scene.setAttribute('arjs', 'trackingMethod: best; sourceType: webcam; debugUIEnabled: false;');
        return scene;
    }
    createCamera(){
        const camera = document.createElement('a-entity');
        camera.setAttribute('camera','');
        return camera;
    }
    createNfts(nfts, joinRoom, sendMessageSocket, leaveRoom){
        const nftsElements = [];
        const entriesPlants = Object.entries(nfts);
        
        const sendMessageHola = ()=>sendMessageSocket("hola");
        for (const [keyPlant, value] of entriesPlants) {
            
            const a_nft = value['a-nft'];
            const entities = value['entities'];
            const texts = value['texts'];
            const narrative = value['narrative'];
            
            const nftElement = document.createElement('a-nft');
            nftsElements.push(nftElement);
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
                    message.position = changePosition(message.position);
                    message.id = message.id + getRandomOffset();
                    this.addEntity(nftElement, message);
                });
                window.addEventListener("touchstart", sendMessageHola);
                sendMessageHola();
              });
            nftElement.addEventListener('markerLost', () => {
                leaveRoom();
                window.removeEventListener("touchstart", sendMessageHola);
                const deleteElements = document.querySelectorAll('.text');
                deleteElements.forEach(function(element) {
                    element.parentNode.removeChild(element);
                });
            });
        }
        return nftsElements;
    }
}
