
export const Card = (prop) => {
  return (
    <div className="card">
      <h4>{prop.ropa.title}</h4>
      <img src={prop.ropa.image} alt={prop.ropa.title} />
      <p>Price: {prop.ropa.price}</p>
      <p>Description: {prop.ropa.description}</p>
      <p>Category: {prop.ropa.category}</p>
    </div>
  )
}


export default Card