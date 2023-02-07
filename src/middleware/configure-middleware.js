import DatabaseMiddleware from "./database";

/**
 * @param {Express} app
 * @constructor
 */
export default function ConfigureMiddleware(app) {
    // Automatically open and close database
    DatabaseMiddleware(app)
}