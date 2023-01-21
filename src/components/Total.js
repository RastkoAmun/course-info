const Total = ({total}) => {
  const totalNumberofExercises = total[0].exercises + total[1].exercises + total[2].exercises; 
  return(
    <div>
      <p>Number of exercises: {totalNumberofExercises}</p>
    </div>
  )
}

export default Total;