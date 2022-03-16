const { Review } = require("../models/review.model")

const { User } = require('../models/user.model')

const initModels= ()=>{
    User.hasMany(Review)
    Review.belongsTo(User)
}

module.exports = { initModels }