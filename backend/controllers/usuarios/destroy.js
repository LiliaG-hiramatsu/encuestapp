import Usuario from '../../models/Usuario.js'

export default async(req, res, next) => {
    try {
        let deletedUser = Usuario.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'usuario eliminado',
            response: deletedUser._id
        })
    } catch (error) {
        next(error)
    }
}