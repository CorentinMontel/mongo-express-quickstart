import winston from "winston";
import config from "../../config/config";

const logger = winston.createLogger({
    level: config.LOG_LEVEL,
    defaultMeta: { service: 'app' },
    transports: [
        new winston.transports.File({ filename: __dirname + '/../../var/log/logs.log'}),
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