import Encuesta from "../../models/Encuesta.js";

export default async (req, res, next) => {
    try {
        let nuevaEncuesta = await Encuesta.create(req.body)
        nuevaEncuesta.tenant = req.usuario.tenantId
        nuevaEncuesta.creador = req.usuario.userId
        return res.status(201).json({
            success: true,
            message: "Encuesta creada",
            response: nuevaEncuesta
        })
    } catch (error) {
        next(error)
    }
}