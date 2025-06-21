import joi from "joi";

let registerSchema = joi.object({
    nombre: joi.string().required().min(4).max(15),
    email: joi.string().required().min(5).max(20),
    password: joi.string().required().min(4).max(10)
})

export default registerSchema