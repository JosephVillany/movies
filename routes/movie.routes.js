const express = require('express')
const { 
    getAllMovies, 
    getMovieById, 
    createMovie,
    updateMovie,
    deleteMovie
} = require('../controllers/movies.controller')
const { validateSession, protectAdmin } = require('../middlewares/auth.middlewares')
const { movieExists, protectAccountOwner } = require('../middlewares/movies.middlewares')
const { upload } = require('../utils/multer')


const router = express.Router() 

router.use(validateSession )

router.get('/', getAllMovies)

router.post('/', protectAdmin, upload.single('imgUrl'), createMovie)


router
  .use('/:id', movieExists)
  .route('/:id')
  .get(getMovieById)
  .patch(protectAccountOwner, updateMovie)
  .delete(protectAccountOwner, deleteMovie);

/* router.get('/:id', getMovieById)
router.patch('/:id', updateMovie)
router.delete('/:id', deleteMovie)
 */

module.exports = {movieRouter: router}