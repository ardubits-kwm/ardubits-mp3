// MakerBit Serial MP3 blocks supporting Catalex Serial MP3 1.0


//% weight=100 color=#64C800 icon="\u272a" block="MP3"
namespace MP3 {
    let commandBuffer: Buffer = undefined;

    /**
     * init mp3
     */
    //% blockId="Init_mp3" block="connect MP3 device with MP3 RX attached to %mp3RX | and MP3 TX to %mp3TX"
    //% weight=50 
    export function init_mp3(mp3RX: SerialPin, mp3TX: SerialPin):void {
        serial.redirect(mp3RX as number,mp3TX as number,BaudRate.BaudRate9600);

    }



}
