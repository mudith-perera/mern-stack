//Used to create function that will reference inside the routers to keep the code cleaner

//import mongoose
const mongoose = require('mongoose')

//importing the model
const Workout = require('../models/workoutModel')

//get all workouts
const getWorkouts = async (req, res) => {
  //find() is used to get all the data
  //{} = select * , {reps: 20} = select * where reps =20
  const workouts = await Workout.find({}).sort({createdAt: -1})
  res.status(200).json(workouts)
}
//get a single workout
const getWorkout = async (req, res) => {
  //grabbing the id from the route parameters
  const { id } = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error : "No such Workout"})
  }
  const workout = await Workout.findById(id)

  if(!workout){
    return res.status(404).json({error : "No such Workout"})
  }
  res.status(200).json(workout)
}
//create new workout
const createWorkout = async (req, res) => {
  const {title,load,reps} = req.body

  //creating a new document
  try {
    const workout = await Workout.create({title,load,reps})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error : "No such Workout"})
  }

  const workout = await Workout.findOneAndDelete({_id: id})

  if(!workout){
    return res.status(400).json({error : "No such Workout"})
  }

  res.status(200).json(workout)
}
//update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error : "No such Workout"})
  }

  const workout = await Workout.findOneAndUpdate({_id: id},{
    ...req.body
  })

  if(!workout){
    return res.status(400).json({error : "No such Workout"})
  }

  res.status(200).json(workout)
}


module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
}