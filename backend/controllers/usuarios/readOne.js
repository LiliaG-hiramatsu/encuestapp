import Usuario from '../../models/Usuario.js'

export default async (req, res, next) => {
    try {
        let usuario = await Usuario.findOne({ _id:req.params.id })
        if (usuario) {
            return res.status(200).json({
                success: true,
                message: 'usuario encontrado',
                response: usuario
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'usuario no encontrado',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}