// MakerBit Serial MP3 blocks supporting Catalex Serial MP3 1.0


//% weight=100 color=#64C800 icon="\u272a" block="MP3"
namespace MP3 {
    let commandBuffer: Buffer = undefined;

    /**
     * init mp3
     */
    //% block="init MP3 RX: %rx TX: %tx"
    //% weight=50 
    export function initMp3(rx: SerialPin, tx: SerialPin):void {
        serial.redirect(rx as number,tx as number,BaudRate.BaudRate9600);

    }



}
