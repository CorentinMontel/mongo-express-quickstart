import Home from "./controllers/home";
import Kitten from "./controllers/kitten";

/**
 * @param {Express} app
 * @constructor
 */
export default function Routes(app) {
    app.get('/', ...Home.home)
    app.get('/kittens/:name', ...Kitten.kittenItem)
    app.get('/kittens', ...Kitten.kittenCollection)
    app.post('/kittens', ...Kitten.kittenCollection)
}