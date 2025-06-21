import Usuario from '../models/Usuario.js'

export default async(req, res, next) => {
    try {
        let one = await Usuario.findOne({email: req.body.email})
        if (one) {
            return res.status(400).json({
                success: false,
                message: 'El usuario ya existe',
                response: one._id
            })
        } else {
            return next()
        }
    } catch (error) {
        return next(error)
    }
}