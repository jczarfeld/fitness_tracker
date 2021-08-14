 const mongoose = require("mongoose");

 const workoutSchema = new workoutSchema({
     day: {
         //////
     },
     exercises: {
         //////
     }
 })

 const Workout = mongoose.model("Workout", workoutSchema);

 module.exports = Workout;