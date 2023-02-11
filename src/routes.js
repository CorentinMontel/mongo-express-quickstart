import Home from "./controllers/home";
import Kitten from "./controllers/kitten";

/**
 * @param {Express} app
 * @constructor
 */
export default function Routes(app) {
    app.get('/', ...Home.home)

    // Kittens routes
    app.get('/kittens', ...Kitten.kittenCollection)
    app.get('/kittens/:name', ...Kitten.kittenItem)
    app.post('/kittens', ...Kitten.createKitten)
    app.patch('/kittens/:id', ...Kitten.updateKitten)
    app.delete('/kittens/:id', ...Kitten.deleteKitten)
}