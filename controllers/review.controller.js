const { Review } = require('../models/review.model')

exports.getAllReview = async ( req, res) => {
    try {
        const review = await Review.findAll({
            where: {status: 'active'} 
        })

        //if(user.length === 0){
        //console.log(user);
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
                review
            }
        })
    } catch (error) {
        console.log(error);
    }
}

exports.getReviewById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await Review.findOne({
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
                review
            }
        })

    } catch (error) {
        console.log(error);
    }
}

exports.createReview = async (req, res) => {
    try {
        const { title, comment, rating, userId, movieId } = req.body
        const review = await Review.create({
            title: title,
            comment: comment,
            rating: rating, 
            userId: userId,
            movieId: movieId
        })

        res.status(200).json({
            status: 'success',
            data: {
                review
            }
        })

    } catch (error) {
        console.log(error);
    }

}