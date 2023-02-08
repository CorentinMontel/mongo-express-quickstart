import {ApiResponder} from "../services/http";
import KittenRepository from "../repository/kitten-repository";
import {body} from "express-validator";

export default {
    kittenItem: [
        async (req, res) => {
            const kitten = await KittenRepository.findByName(req.params.name)
            console.log(kitten)

            new ApiResponder(res).sendOk(kitten)
        }
    ],

    kittenCollection: [
        async (req, res) => {
            const kittens = await KittenRepository.findCollection()
            new ApiResponder(res).sendOk(kittens)
        }
    ],

    createKitten: [
        body('name').not().isEmpty(),
        body('name').isLength({min: 3, max: 255}),
        async (req, res) => {

        }
    ]
}