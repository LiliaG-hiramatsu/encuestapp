import Encuesta from '../../models/Encuesta.js'

// obtiene todas las encuestas del tenant logueado
export default async (req, res, next) => {
    try {
        let tenantId = req.usuario.tenantId
        let encuestas = await Encuesta.find({ tenantId })
        return res.status(200).json({
            success: true,
            message: 'Encuestas encontradas',
            response: encuestas
        })
    } catch (error) {
        next(error)
    }
}