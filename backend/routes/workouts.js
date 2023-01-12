//Create routes using express package
const express = require("express")

//importing the controller
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')

//get the Router instatnce from the express package
const router = express.Router()

//Request handlers (START)
//Get all workouts
router.get('/',getWorkouts)

//Get a single workout
router.get('/:id',getWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id',deleteWorkout)

//Update a workout
router.patch('/:id',updateWorkout)
//Request handlers (END)

//export the created routes
module.exports = router