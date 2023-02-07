import {expressjwt as jwt} from "express-jwt";
import config from "../../config/config";

export default jwt({
    secret: config.JWT_SECRET,
    algorithms: ["HS256"]
})