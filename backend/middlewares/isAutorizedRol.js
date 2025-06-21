export default (...rolesPermitidos) => {
    return (req, res, next) => {
        if (!rolesPermitidos.includes(req.usuario.rol)) {
            return res.status(403).json({
                success: false,
                message: 'Rol no autorizado',
                response: null
            })
        }
        next()
    }
}