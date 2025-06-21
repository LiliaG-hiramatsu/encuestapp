import Usuario from "../../models/Usuario.js";

export default async (req, res, next) => {
    try {
        let one = await Usuario.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'usuario creado',
            response: one._id
        })
    } catch (error) {
        console.log("error al registrar")
        next(error)
    }
}