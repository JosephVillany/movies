const { Actor } = require('../models/review.model')

exports.getAllActor = async ( req, res) => {
    try {
        const actor = await Actor.findAll({
            where: {status: 'active'} 
        })

        if(!actor){
            res.status(400).json({
                status: 'error',
                message: 'There are not users until'
            })
            return
        }

        res.status(201).json({
            status: 'success',
            data: {
                actor
            }
        })
    } catch (error) {
        console.log(error);
    }
}

exports.getActorById = async (req, res) => {
    try {
        const { id } = req.params
        const actor = await Actor.findOne({
            where: {id: id, status: 'active'}
        })

        if(!actor) {
            res.status(404).json({
                status: 'error',
                message: `The id ${id} selected was not found`
            })
        }

        res.status(200).json({
            status: 'success',
            data: {
                actor
            }
        })

    } catch (error) {
        console.log(error);
    }
}

exports.createActor = async (req, res) => {
    try {
        const { name, country, rating,  age, profilePic } = req.body
        const actor = await Actor.create({
            name: name,
            country: country,
            rating: rating, 
            age: age,
            profilePic: profilePic
        })

        res.status(200).json({
            status: 'success',
            data: {
                actor
            }
        })

    } catch (error) {
        console.log(error);
    }

}