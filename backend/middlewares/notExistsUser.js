import Usuario from '../models/Usuario.js'

export default async(req, res, next) => {
    try {
        let one = await Usuario.findOne({email: req.body.email}, '-_id -__v -password')
        if (!one) {
            return res.status(400).json({
                success: false,
                message: 'El usuario no existe',
                response: null
            })
        } else {
            req.usuario = one
            return next()
        }
    } catch (error) {
        return next(error)
    }
}