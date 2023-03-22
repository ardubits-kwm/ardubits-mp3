// MakerBit Serial MP3 blocks supporting Catalex Serial MP3 1.0


//% weight=100 color=#64C800 icon="\u272a" block="MP3"
namespace MP3 {


    /**
     * init mp3
     */
    //% blockId="Init_mp3" block="connect MP3 device with MP3 RX attached to %mp3RX | and MP3 TX to %mp3TX"
    //% weight=50 
    export function init_mp3(mp3RX: SerialPin, mp3TX: SerialPin): void {
        let commandBuffer: Buffer = undefined;
        serial.redirect(mp3RX as number,mp3TX as number,BaudRate.BaudRate9600)
    }


    /**
     * play mp3

    //% blockId="play_mp3" block="play mp3 %num"
    //% weight=50 
    export function play(num: number): void {
        commandBuffer = pins.createBuffer(6);
        commandBuffer.setNumber(NumberFormat.UInt8LE, 0, 0x7e);
        commandBuffer.setNumber(NumberFormat.UInt8LE, 1, 0x04);
        commandBuffer.setNumber(NumberFormat.UInt8LE, 2, 0x41);
        commandBuffer.setNumber(NumberFormat.UInt8LE, 3, 0x00);
        commandBuffer.setNumber(NumberFormat.UInt8LE, 4, num);
        commandBuffer.setNumber(NumberFormat.UInt8LE, 5, 0xef);
        serial.writeBufferBlocking(commandBuffer)
    }
     */
}
