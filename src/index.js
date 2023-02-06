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

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})