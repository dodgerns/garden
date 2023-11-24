export default class Qr{
    constructor(){
        this.qrCode = null;
        this.domain = null;
        this.idPlant = null;
    }
    scanQr(imageData){
        this.qrCode = jsQR(imageData.data, imageData.width, imageData.height);
    }
    getQrCode(){
        return this.qrCode;
    }
    getURL(){
        return this.url;
    }
    getIdPlant(){
        return this.idPlant;
    }
    validateQr(){
        const url = 'https://garden.render.com/1233214';
        const regex = /^(https?:\/\/[a-zA-Z0-9.-]+)(\/[a-zA-Z0-9_/-]+)$/;
        if (regex.test(url)){
            const [, domain, path] = url.match(regex);
            this.domain = domain;
            this.idPlant = path;
            console.log('domain:', domain);
            console.log('plant:', path);
        }
    }
}
