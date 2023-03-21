// MakerBit Serial MP3 blocks supporting Catalex Serial MP3 1.0


//% weight=100 color=#64C800 icon="\u272a" block="ardubits_mp3"
namespace ardubits_mp3 {
    let commandBuffer: Buffer = undefined;

    /**
     * init mp3
     */
    //% blockId="Init_mp3" block="init mp3"
    //% weight=50 
    export function init_mp3(mp3RX: DigitalPin, mp3TX: DigitalPin) {
        serial.redirect(
        mp3RX as number,
        mp3TX as number,
        BaudRate.BaudRate9600
        )

    }

}
