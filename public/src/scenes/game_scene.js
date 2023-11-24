export default class GameScene extends Phaser.Scene {
    constructor(emitter) {
        super();
        this.video = null;
        this.capturedImage = null;
        this.emitter = emitter;
        this.captureY = null;
    }

    preload() {
        this.load.image('cat_cactus', 'assets/cat_cactus.jpg');
    }

    create() {
        this.video = this.add.video(0, 0).setOrigin(0).setVisible(false);
        this.video.on('play', () => {});
        this.video.once('created', () => {
            this.video.setDisplaySize(window.innerWidth, window.innerHeight).setVisible(true);
            const captureHeight = this.video.height / 3;
            this.captureY = this.video.height - captureHeight;
            console.log(this.captureY);
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
        const ctx = canvas.getContext('2d');
        const captureWidth = videoElement.videoWidth;
        const captureHeight = videoElement.videoHeight / 2.5;
        const startY = videoElement.videoHeight / 2.5;

        canvas.width = captureWidth;
        canvas.height = captureHeight;

        ctx.drawImage(videoElement, 0, startY, captureWidth, captureHeight, 0, 0, captureWidth, captureHeight);
        this.capturedImage = ctx.getImageData(0, 0, captureWidth, captureHeight);
    }

    getCapturedImage(){
        return this.capturedImage;
    }
    addInformation(plantInformation){
        this.add.image(50, 50, 'cat_cactus').setScale(0.025);
    }
}
