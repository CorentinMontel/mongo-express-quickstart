import winston from "winston";
import config from "../../config/config";
import * as path from "path";

const logger = winston.createLogger({
    level: config.LOG_LEVEL,
    defaultMeta: { service: 'app' },
    transports: [
        new winston.transports.File({ filename: `${__dirname}${path.sep}..${path.sep}..${path.sep}var${path.sep}log${path.sep}app.log`}),
    ],
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({level, message, timestamp, service}) => {
            return `${timestamp} [${service}] ${level}: ${message}`;
        }),
    ),
});

export default logger

export const appLogger = logger