export default (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: 'inicio de sesion exitoso',
            response: {
                token: req.token, // despues hay que guardar el token en el local storage desde el front
                usuario: req.usuario
            }
        })
    } catch (error) {
        next(error)
    }
}