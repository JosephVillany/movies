const { Movie } = require('../models/review.model')

exports.getAllMovie = async ( req, res) => {
    try {
        const review = await Movie.findAll({
            where: {status: 'active'} 
        })

        if(!review){
            res.status(400).json({
                status: 'error',
                message: 'There are not users until'
            })
            return
        }

        res.status(201).json({
            status: 'success',
            data: {
                movie
            }
        })
    } catch (error) {
        console.log(error);
    }
}

exports.getMovieById = async (req, res) => {
    try {
        const { id } = req.params
        const movie = await Movie.findOne({
            where: {id: id, status: 'active'}
        })

        if(!review) {
            res.status(404).json({
                status: 'error',
                message: `The id ${id} selected was not found`
            })
        }

        res.status(200).json({
            status: 'success',
            data: {
                movie
            }
        })

    } catch (error) {
        console.log(error);
    }
}

exports.createMovie = async (req, res) => {
    try {
        const { title, description, duration, rating, img, genre } = req.body
        const review = await Review.create({
            title: title,
            comment: comment,
            rating: rating, 
            userId: userId,
            movieId: movieId,
            img: img,
            genre: genre
        })

        res.status(200).json({
            status: 'success',
            data: {
                movie
            }
        })

    } catch (error) {
        console.log(error);
    }

}