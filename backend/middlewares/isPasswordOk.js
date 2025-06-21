import { compareSync } from "bcrypt";
import Usuario from "../models/Usuario.js";

export default async (req, res, next) => {
    try {
        let formPass = req.body.password
        let user = await Usuario.findOne({ email: req.body.email })
        let mongoPass = user.password
        let verified = compareSync(formPass, mongoPass)
        if (verified) {
            return next()
        } else {
            return res.status(401).json({
                success: false,
                message: "Credenciales invalidas",
                response: null
            })
        }
    } catch (error) {
        return next(error)
    }
}