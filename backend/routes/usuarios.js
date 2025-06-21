import express from 'express';
import create from '../controllers/usuarios/create.js';
import read from '../controllers/usuarios/read.js';
import readOne from '../controllers/usuarios/readOne.js';
import update from '../controllers/usuarios/update.js';
import destroy from '../controllers/usuarios/destroy.js';

let router = express.Router();

// create
router.post('/', create)

// read
router.get('/', read)
router.get('/:id', readOne)

// update
router.put('/:u_id', update)

// destroy
router.delete('/:id', destroy)

export default router
