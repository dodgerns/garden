export default class GameScene extends Phaser.Scene {
    constructor(emitter) {
        super();
        this.video = null;
        this.capturedImage = null;
        this.emitter = emitter;
    }

    preload() {
        this.load.image('cat_cactus', 'assets/cat_cactus.jpg');
    }

    create() {
        this.video = this.add.video(0, 0).setOrigin(0).setVisible(false);
        this.video.on('play', () => {});
        this.video.once('created', () => {
            this.video.setDisplaySize(window.innerWidth, window.innerHeight).setVisible(true);
        });
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false })
        .then((stream) => {
            this.video.loadMediaStream(stream, true);
            this.video.play();
        })
        .catch((err) => {console.log(err)});
        this.emitter.addEvent('capture_image', this.captureImage, this);
        this.emitter.addEvent('add_information', this.addInformation, this);
    }

    captureImage() {
        const videoElement = this.video.video;
        const canvas = document.createElement('canvas');
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        this.capturedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
    }

    getCapturedImage(){
        return this.capturedImage;
    }
    addInformation(plantInformation){
        this.add.image(50, 50, 'cat_cactus').setScale(0.025);
    }
}
