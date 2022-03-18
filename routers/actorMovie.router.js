const express = require('express')
const { getAllActorMovie, getActorMovieById, createActorMovie } = require('../controllers/actorMovie.controller')




const router = express.Router() 

router.get('/', getAllActorMovie)
router.post('/', createActorMovie)
router.get('/:id', getActorMovieById)

module.exports = {ActorMovieRouter: router}