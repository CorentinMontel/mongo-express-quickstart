import {body} from "express-validator";
import express from "express";

const mongoose = require('mongoose');

const kittySchema = new mongoose.Schema({
    name: String
});


export default mongoose.model('Kitten', kittySchema);

export const kittenValidators = [
    body('name').exists(),
    body('name').not().isEmpty(),
    body('name').isLength({min: 3, max: 255}),
]