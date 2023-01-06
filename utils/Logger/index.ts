export interface LoggerInterface {
    logCount: number;
    showLog: boolean;
    logFile: string;
    setName: (logFile: string) => Logger;
    log: (...message: any) => void;
}
export class Logger implements LoggerInterface {
    logCount: number;
    showLog: boolean;
    logFile: string;
    constructor(
        logFile: string,
        showLog: boolean = process.env.NODE_ENV === "development"
    ) {
        this.logFile = logFile;
        this.showLog = showLog;
        this.logCount = 1;
        if (showLog)
            console.log(`New Logger Created:`, logFile)
    }
    setName: (logFile: string) => Logger = (logFile: string) => {
        this.logFile = logFile;
        this.logCount = 1;
        return this;
    };
    log: (...message: any) => void = (...message: any) => {
        if (this.showLog)
            console.log(`${this.logCount++} ---> ${this.logFile}:`, ...message);
    };
}
