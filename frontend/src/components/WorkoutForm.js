import { useState } from "react";

const WorkoutForm = () => {

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    //Stopping the default action of refreshing the page
    e.preventDefault()

    const workout = {title, load, reps}

    const response = await fetch('/api/workouts',{
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if(!response.ok){
      setError(json.error)
      console.log(error)
    }
    if(response.ok){
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      console.log("new workout added",json)
      window.location.reload(false);
    }
  }

  return(
    <form  className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Excersize Title: </label>
      <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
      <label>Load (kg): </label>
      <input type="number" onChange={(e) => setLoad(e.target.value)} value={load} required />
      <label>Reps: </label>
      <input type="number" onChange={(e) => setReps(e.target.value)} value={reps} required/>
      <input type="submit" value="Add Workout"/>
      <input type="reset" value="Clear"/>
    </form>
  )
}

export default WorkoutForm