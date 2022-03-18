const express = require('express')
const { getAllMovie, createMovie, getMovieById } = require('../controllers/movie.controller')



const router = express.Router() 

router.get('/', getAllMovie)
router.post('/', createMovie)
router.get('/:id', getMovieById)

module.exports = {moviesRouter: router}