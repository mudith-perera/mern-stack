//Schema and the model of the server is define here


//Schema :  defines the structure of the document inside the db
//Model  :  apply the schema to the model and use the model to access the db

const mongoose = require('mongoose')

//creating the schema (START)
const Schema = mongoose.Schema

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required:true
  },
  load: {
    type: Number,
    required: true
  }
}, {timestamps: true })
//creating the schema (START)

//creating the model (START)
//creating the collection called "Workout"
module.exports = mongoose.model('Workout',workoutSchema)
//creating the model (START)