import { COLORS } from '../../helpers/colors.ts';

// TODO: Implementar el LocalLogger Class

export class LocalLogger {
    constructor(
        private file: string
    ) {}

    writeLog(msg: string): void {
        console.log(`[${ this.file } LOG] ${ msg }`)
    }

    writeError(msg: string): void {
        console.log(`%c[${ this.file } ERROR] ${ msg }`, COLORS.red);
    }

    writeWarning(msg: string): void {
        console.log(`%c[${ this.file } WARNING] ${ msg }`, COLORS.yellow);
    }
}
