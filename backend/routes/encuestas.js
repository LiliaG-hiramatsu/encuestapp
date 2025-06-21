import express from 'express'
import create from '../controllers/encuestas/create.js'
import read from '../controllers/encuestas/read.js'
import readOne from '../controllers/encuestas/readOne.js'
import update from '../controllers/encuestas/update.js'
import destroy from '../controllers/encuestas/destroy.js'
import isValidToken from '../middlewares/isValidToken.js'
import isAutorizedRol from '../middlewares/isAutorizedRol.js'

let router = express.Router();

// create
router.post('/', isValidToken, isAutorizedRol(['moderador']), create)

// read
router.get('/', read)
router.get('/:id', readOne)

// update
router.put('/:id', isAutorizedRol(['moderador']), update)

// destroy
router.delete('/:id', isAutorizedRol(['moderador']), destroy)

export default router