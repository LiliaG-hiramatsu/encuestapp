import { model, Schema, Types } from 'mongoose';

let collection = 'respuestas'

let respuestaSchema = new Schema({
    encuesta: { type: Types.ObjectId, ref: 'encuestas', required: true },
    respuestas: [{
        pregunta: String,
        respuesta: Types.Mixed // texto o arreglo si es multiple
    }],
    fecha: { type: Date, default: Date.now }
})

let respuesta = model(collection, respuestaSchema)
export default respuesta;