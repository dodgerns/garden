export default class SceneEmitters {
    constructor(emitter){
        this.emitter = emitter;
    }
    addEvent(nameEvent, callback, scope){
        this.emitter.on(nameEvent, callback, scope);
    }
    eventEmitter(nameEvent){
        this.emitter.emit(nameEvent);
    }
}
