import winston from "winston";
import * as path from "path";

process.env.DATABASE_URL || require('dotenv-flow').config();

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL,
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