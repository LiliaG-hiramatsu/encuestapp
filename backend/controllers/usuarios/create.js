import Usuario from '../../models/Usuario.js';

export default async (req, res, next) => {
    try {
        let nuevoUsuario = await Usuario.create(req.body);
        return res.status(201).json({
            success: true,
            message: 'Usuario creado',
            response: nuevoUsuario
        });
    } catch (err) {
        console.log('Error al crear el usuario:', err);
        next(err);
    }
}