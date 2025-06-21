import { model, Schema, Types } from 'mongoose';

let collection = 'usuarios'

let usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

let usuario = model(collection, usuarioSchema)
export default usuario;