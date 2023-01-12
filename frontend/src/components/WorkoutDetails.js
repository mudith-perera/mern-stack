const WorkoutDetails = ({ workout }) => {
  const handleClick = async () => {
    const response = await fetch('/api/workouts/'+ workout._id,{
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      console.log('Deleted',json);
      window.location.reload(false);
    }
  }
  return(
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Load (kg): </strong>{workout.reps}</p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails