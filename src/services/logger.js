import winston from "winston";
import config from "../../config/config";

const logger = winston.createLogger({
    level: config.LOG_LEVEL,
    format: winston.format.simple(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: __dirname + '/../../var/log/logs.log'}),
    ],
});

export default logger