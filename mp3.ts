// MakerBit Serial MP3 blocks supporting Catalex Serial MP3 1.0


//% weight=100 color=#64C800 icon="\u272a" block="MP3"
namespace MP3 {
    let commandBuffer: Buffer = undefined

    function initSerial(rx: SerialPin, tx: SerialPin):void {
        serial.redirect(rx as number,tx as number,BaudRate.BaudRate9600)

    }


    /**
     * init mp3
     */
    //% blockId="INIT_MP3" block="init MP3 RX attached to %rx | and TX to %tx"
    //% weight=50 
    export function initMp3(rx: SerialPin, tx: SerialPin):void {
        initSerial(rx ,tx )
    }

    /**
     * play mp3
     */
    //% blockId="PLAY_MP3" block="play mp3 %num"
    //% weight=50 
    export function play(num: number){
        commandBuffer = pins.createBuffer(6)
        commandBuffer.setNumber(NumberFormat.UInt8LE, 0, 0x7e)
        commandBuffer.setNumber(NumberFormat.UInt8LE, 1, 0x04)
        commandBuffer.setNumber(NumberFormat.UInt8LE, 2, 0x41)
        commandBuffer.setNumber(NumberFormat.UInt8LE, 3, 0x00)
        commandBuffer.setNumber(NumberFormat.UInt8LE, 4, num)
        commandBuffer.setNumber(NumberFormat.UInt8LE, 5, 0xef)
        serial.writeBufferBlocking(commandBuffer)
    }

}
