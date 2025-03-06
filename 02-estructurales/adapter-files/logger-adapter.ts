import { Logger } from 'jsr:@deno-library/logger';

// TODO: Implementar el LoggerAdapter

interface ILoggerAdapter {
    file: string;

    writeLog: (msg: string) => void;
    writeWarning: (msg: string) => void;
    writeError: (msg: string) => void;
}

export class LoggerAdapter implements ILoggerAdapter {
    public file: string;
    private denoLogger = new Logger();

    constructor(file: string) {
        this.file = file;

    }
    writeLog(msg: string) {
        this.denoLogger.info(`[${ this.file } LOG] ${ msg }`);
    }
    writeWarning(msg: string) {
        this.denoLogger.warn(`[${ this.file } ERROR] ${ msg }`);
    }
    writeError(msg: string) {
        this.denoLogger.error(`[${ this.file } WARNING] ${ msg }`)
    }
}
