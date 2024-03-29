/* const ProductCard = (product) => {
    const {price, id, image, title} = product;
    return(
        <div >
        <div>
          <h3> {price} </h3>
        </div>
        <img src={image} alt={title} />
        <div>
          <h2> {title} </h2>
        </div>
      </div>
    )
}
export default ProductCard */

const ProductCard = ({price, title, image}) => {
    return (   <div className="card">
        <div className="price">
            <h3> {price} $ </h3>
        </div>
        <img src= {image} alt= {title} />
        <div className="card_over">
            <h3> {title} </h3>
        </div>
    </div>)
 
}
export default ProductCard