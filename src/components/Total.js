const Total = ({parts}) => {
  const total = parts.reduce((sum, item) => 
    sum + item.exercises, 0);
  
  return(
    <div>
      <p className="total-number">Number of exercises: {total}</p>
    </div>
  )
}

export default Total;