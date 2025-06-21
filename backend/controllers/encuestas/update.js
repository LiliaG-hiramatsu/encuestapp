import Encuesta from "../../models/Encuesta.js";

export default async (req, res, next) => {
    try {
        let encuesta = await Encuesta.findByIdAndUpdate(
            {
                _id: req.params.id,
                tenant: req.usuario.tenantId 
            },
            req.body,
            { new: true }
        )
        if (!encuesta) {
            return res.status(404).json({
                success: false,
                message: "Encuesta no actualizada",
                response: null
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "Encuesta actualizada",
                response: encuesta
            })
        }
    } catch (error) {
        next(error)
    }
}