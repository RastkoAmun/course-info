const Total = ({parts}) => {
  // const total = total[0].exercises + total[1].exercises + total[2].exercises;
  
  const total = parts.reduce((sum, item) => sum + item.exercises, 0);
  
  return(
    <div>
      <p>Number of exercises: {total}</p>
    </div>
  )
}

export default Total;