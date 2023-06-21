const express = require('express');
require('dotenv').config();
const router = express.Router()
const workoutRoutes = require('./routes/workout')

const app = express(); // creating express app


//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.use('/api/workouts', workoutRoutes)



app.listen(process.env.PORT, () => { // listen for request
  console.log(`listening on port:${process.env.PORT}`);
})