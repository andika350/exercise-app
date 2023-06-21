require("dotenv").config();

const express = require("express");
const router = express.Router();
const workoutRoutes = require("./routes/workout");
const mongoose = require("mongoose");

const app = express(); // creating express app

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

//connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      // listen for request
      console.log(
        `connected to the DB & listening on port:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
