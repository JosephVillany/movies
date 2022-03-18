const { ActorMovie } = require('../models/review.model')

exports.getAllActorMovie = async ( req, res) => {
    try {
        const actorMovie = await ActorMovie.findAll({
            where: {status: 'active'} 
        })

        if(!actorMovie){
            res.status(400).json({
                status: 'error',
                message: 'There are not users until'
            })
            return
        }

        res.status(201).json({
            status: 'success',
            data: {
                actorMovie
            }
        })
    } catch (error) {
        console.log(error);
    }
}

exports.getActorMovieById = async (req, res) => {
    try {
        const { id } = req.params
        const actorMovie = await ActorMovie.findOne({
            where: {id: id, status: 'active'}
        })

        if(!actorMovie) {
            res.status(404).json({
                status: 'error',
                message: `The id ${id} selected was not found`
            })
        }

        res.status(200).json({
            status: 'success',
            data: {
                actorMovie
            }
        })

    } catch (error) {
        console.log(error);
    }
}

exports.createActorMovie = async (req, res) => {
    try {
        const { actorId, movieId } = req.body
        const actorMovie = await ActorMovie.create({
            actorId: actorId,
            movieId: movieId,
        
        })

        res.status(200).json({
            status: 'success',
            data: {
                actorMovie
            }
        })

    } catch (error) {
        console.log(error);
    }

}