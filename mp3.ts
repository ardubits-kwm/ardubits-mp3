// MakerBit Serial MP3 blocks supporting Catalex Serial MP3 1.0


//% weight=100 color=#64C800 icon="\u272a" block="MP3"
namespace MP3 {
    let commandBuffer: Buffer = undefined;

    /**
     * init mp3
     */
    //% block="init MP3|RX %mp3RX TX %mp3TX"
    //% weight=50 
    export function initMp3(mp3RX: SerialPin, mp3TX: SerialPin):void {
        serial.redirect(mp3RX as number,mp3TX as number,BaudRate.BaudRate9600);

    }



}
