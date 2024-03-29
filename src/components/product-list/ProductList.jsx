import "./ProductList.scss"
const ProductList = ({products}) => {
    console.log(products)
    return(
        <div className="products-list">
            {
                products.map((product) => (
                    <div className="">
                       <div>
                        <h3>{product.price}</h3>
                        </div> 
                        <img src={product.image} alt="" />

                    </div>
                ) )
            }
            
        </div>
    )
}
export default ProductList