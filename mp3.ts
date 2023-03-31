// MakerBit Serial MP3 blocks supporting Catalex Serial MP3 1.0


//% weight=100 color=#64C800 icon="\u272a" block="MP3"
namespace MP3 {
    let commandBuffer: Buffer = undefined



    /**
     * init mp3
     */
    //% blockId="INIT_MP3" block="init MP3 RX|%rx  TX|%tx"
    //% weight=50 
    export function initMp3(rx: SerialPin, tx: SerialPin):void {
        serial.redirect(rx as number,tx as number,BaudRate.BaudRate9600)
    }

    /**
     * play mp3
     */
    //% blockId="PLAY_MP3" block="play mp3 |%num"
    //% weight=49 
    export function play(num: number): void{
        let buf = pins.createBuffer(6);
        buf[0] = 0x7e;
        buf[1] = 0x04;
        buf[2] = 0x41;
        buf[3] = 0x00;
        buf[4] = num;
        buf[5] = 0xef;
        serial.writeBuffer(buf);
    }

}
