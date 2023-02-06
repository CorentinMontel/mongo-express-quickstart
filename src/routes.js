import Home from "./controllers/home";

/**
 * @param {Express} app
 * @constructor
 */
export default function Routes(app) {
    app.get('/', Home.home)
}