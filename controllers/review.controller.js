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