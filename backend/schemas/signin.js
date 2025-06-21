import joi from "joi";

let signinSchema = joi.object({
    email: joi.string().required().min(5).max(20),
    password: joi.string().required().min(4).max(10)
})

export default signinSchema