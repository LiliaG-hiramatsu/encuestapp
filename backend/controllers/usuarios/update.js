import Usuario from "../../models/Usuario.js";

export default async(req, res, next) => {
    try {
        let updatedUser = await Usuario.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new: true }
        )
        return res.status(200).json({
            success: true,
            message: 'usuario actualizado',
            response: updatedUser
        })
    } catch (error) {
        next(error)
    }
}