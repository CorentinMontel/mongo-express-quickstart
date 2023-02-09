import {ApiResponder} from "../services/http";
import KittenRepository from "../repository/kitten-repository";
import Kitten, {kittenValidators} from "../models/kitten";

export default {
    kittenItem: [
        async (req, res) => {
            const kitten = await KittenRepository.findByName(req.params.name)

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
        ...kittenValidators,
        async (req, res) => {
            const kitten = new Kitten({name: req.body.name})
            await kitten.save()

            new ApiResponder(res).sendCreated(kitten)
        }
    ]
}