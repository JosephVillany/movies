const { Actor } = require("../models/actor.model")
const { Movie } = require("../models/movie.model")
const { Review } = require("../models/review.model")
const { User } = require('../models/user.model')
const { Actorinmovie } = require('../models/actorMovie.model')



const initModels= ()=>{
    // 1 User <--> M review
    User.hasMany(Review)
    Review.belongsTo(User)

    // 1 movie <--> M review
    Movie.hasMany(Review);
    Review.belongsTo(Movie);

    //M movie <--> M Actor
    Movie.belongsToMany(Actor, { through: Actorinmovie });
    Actor.belongsToMany(Movie, { through: Actorinmovie });
}

module.exports = { initModels }