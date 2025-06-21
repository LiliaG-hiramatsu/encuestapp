import Usuario from "../../models/Usuario.js";

export default async (req, res, next) => {
    try {
        let usuarios = await Usuario.find()
        return res.status(200).json({
            success: true,
            message: 'usuarios encontrados',
            response: usuarios
        })
    } catch (error) {
        next(error)
    }
}