import { model, Schema, Types } from 'mongoose'

let collection = 'encuestas'

let encuestaSchema = new Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  preguntas: [{
    tipo: { type: String, enum: ['texto', 'opciones', 'multiple'], required: true },
    texto: { type: String, required: true },
    opciones: [String]
  }],
  creador: { type: Types.ObjectId, ref: 'usuarios', required: true },
  activa: { type: Boolean, default: true },
  fechaCreacion: { type: Date, default: Date.now }
});

let encuesta = model(collection, encuestaSchema)
export default encuesta;
