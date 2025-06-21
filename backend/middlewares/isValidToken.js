import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    try {
        let token = jwt.sign(
            { userId: usuario._id,
                rol: usuario.rol,
                tenantId: usuario.tenantId }, // objetos a convertir en token
            process.env.SECRET_KEY, // palabra que sirve de llave para tokenizar
            { expiresIn: 60*60*24*7 } // expiracion en segundos
        )
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token requerido",
                response: null
            })
        }
        let decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.usuario = decoded // usuario.rol, usuario.userId, usuario.tenantId
        return next()
    } catch (error) {
        return next(error)
    }
}