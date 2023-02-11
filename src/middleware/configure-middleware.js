import DatabaseMiddleware from "./database";
import express from "express";

/**
 * @param {Express} app
 * @constructor
 */
export default function ConfigureMiddleware(app) {
    // Automatically open and close database
    DatabaseMiddleware(app)

    // Body parser
    app.use(express.json())
}