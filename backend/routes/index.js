import express from 'express';
import usuarioRouter from './usuarios.js'
import authRouter from './auth.js'
//import encuestaRouter from './encuestas.js'
//import respuestaRouter from './respuestas.js'

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.use('/usuarios', usuarioRouter)
//router.use('/encuestas', encuestaRouter)
//router.use('/respuestas', respuestaRouter)
router.use('/auth', authRouter)

export default router
