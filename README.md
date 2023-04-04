# ArduBits MP3



MakeCode extension for Serial MP3 players with the QJ008 chip.

## Microbit Board



## Serial MP3

This extension supports MP3 devices with the QJ008 chip, e.g. the Catalex Serial MP3.

The microSD card shall be formatted as FAT16 or FAT32. exFAT is not supported properly and shall be avoided.

To support all commands properly, the names of folders and files need to obey the following strict pattern:

- Directory names are two-digit numbers, e.g. `01`.
- Track names within the directories shall start with a three digit numbers such as `001.mp3` or `002.wav`

Up to 99 directories and 255 tracks per directory are supported.

```
├── 01/
│   ├── 001.mp3
│   ├── 002 second track.mp3
│   └── 003 third track.mp3
├── 02/
│   ├── 001.mp3
│   └── 002.mp3
│
…
```


