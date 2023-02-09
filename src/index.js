import express from 'express';
import mongoose  from 'mongoose';
import ConfigureMiddleware from "./middleware/configure-middleware";
import Routes from "./routes";

mongoose.set('strictQuery', false);

// Setup app
const app = express()
const port = 3001

// Configure middlewares
ConfigureMiddleware(app)

// Configure routes
Routes(app)

const server = app.listen(port, () => {
    if ("test" !== process.env.NODE_ENV) {
        console.log(`App listening on port ${port}`)
    }
})

export default server