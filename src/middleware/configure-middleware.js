import DatabaseMiddleware from "./database-middleware";

export default function ConfigureMiddleware(app) {
    // Automatically open and close database
    DatabaseMiddleware(app)
}