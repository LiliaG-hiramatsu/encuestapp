import Encuesta from "../../models/Encuesta.js";

export default async (req, res, next) => {
    try {
        let encuesta = await Encuesta.findOne({
            _id: req.params.id,
            tenant: req.usuario.tenantId
        })
        if (!encuesta) {
            return res.status(404).json({
                success: false,
                message: "Encuesta no encontrada",
                response: null
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "Encuesta encontrada",
                response: encuesta
            })
        }
    } catch (error) {
        next(error)
    }
}