const express = require('express')
const { createActor, getActorById, getAllActor } = require('../controllers/actor.controller')



const router = express.Router() 

router.get('/', getAllActor)
router.post('/', createActor)
router.get('/:id', getActorById)

module.exports = {actorRouter: router}
