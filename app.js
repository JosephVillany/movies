const express = require('express');


//Routes
const {reviewRouter} = require('./routers/review.router');
const { moviesRouter } = require('./routers/movie.router');
const { usersRouter } = require('./routers/users.router');
const { ActorMovieRouter } = require('./routers/actorMovie.router');
const {actorRouter}= require('./routers/actor.router');

//Initializind the sercer
const app = express();

app.use(express.json());

//EndPoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/review', reviewRouter);
app.use('/api/v1/movie', moviesRouter);
app.use('/api/v1/actormovie', ActorMovieRouter);
app.use('/api/v1/actor', actorRouter);





module.exports = { app };
