// ArduBits Serial MP3 blocks supporting Catalex Serial MP3 1.0


//% weight=100 color=#64C800 icon="\u272a" block="MP3"
namespace MP3 {
    export enum PrevNext {
        //% block=play
        Play = 0x01,
        //% block=stop
        Stop = 0x02,
        //% block=next
        Next = 0x03,
        //% block=prev
        Prev = 0x04,
        //% block=volumnup
        Volumnup = 0x05,
        //% block=volumndown
        Volumndown = 0x06
    }



    /**
     * init mp3
     */
    //% blockId="INIT_MP3" block="init MP3 RX|%rx TX|%tx"
    //% weight=50 
    export function initMp3(rx: SerialPin, tx: SerialPin):void {
        serial.redirect(rx as number,tx as number,BaudRate.BaudRate9600)
    }

    /**
     * play mp3 number
     */
    //% blockId="PLAY_MP3_NUM" block="MP3 play number|%num"
    //% weight=49 
    export function playNum(num: number): void{
        let buf = pins.createBuffer(6);
        buf[0] = 0x7e;
        buf[1] = 0x04;
        buf[2] = 0x41;
        buf[3] = 0x00;
        buf[4] = num;
        buf[5] = 0xef;
        serial.writeBuffer(buf);
    }
    
    /**
     * set mp3 
     */
    //% blockId="SET_MP3" block="set MP3 |%PrevNext"
    //% weight=48 
    export function setMp3(pn: PrevNext): void{
        let buf = pins.createBuffer(4);
        buf[0] = 0x7e;
        buf[1] = 0x02;
        buf[2] = pn;
        buf[3] = 0xef;
        serial.writeBuffer(buf);
    }

}
