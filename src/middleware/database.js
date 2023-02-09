import mongoose from "mongoose";

export default function (app) {
    app.use(async (req, res, next) => {
        // Open connection
        await mongoose.connect(process.env.DATABASE_URL);

        // On response finish, close database connection
        res.on("finish", async () => {
            await mongoose.connection.close()
        });
        next()
    })
}