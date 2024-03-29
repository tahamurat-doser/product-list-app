import ProductCard from "./ProductCard";
import "./ProductList.scss";
const ProductList = ({ products }) => {
  console.log(products);
  return (
    <div className="products-list">
      {
        products.map((product) => (<ProductCard key={product.id} {...product} />) )
      }

      {/*   {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
      {/*     {
                products.map((product) => (
                    <div key= {product.id} >
                       <div>
                        <h3>{product.price}</h3>
                        </div> 
                        <img src={product.image} alt={product.title} />
                        <div>
                            <h2>{product.title}</h2>
                        </div>

                    </div>
                ) )
            } */}

      {/*    { products.map((product) => {
                return (
                  <div>  <div>
                        <h3> {product.price} </h3>
                    </div>
                    <img src= {product.image} alt={product.title} />
                    <div>
                    <h2>{product.title}</h2>
                    </div>
                    </div>  
                  
                )
              

            })} */}

      {/*    {products.map((product) => {
        const { price, title, image, id } = product;
        return (
          <div key={id}>
            <div>
              <h3> {price} </h3>
            </div>
            <img src={image} alt="" />
            <div>
              <h2> {title} </h2>
            </div>
          </div>
        );
      })} */}

      {/* {products.map(({ price, title, image, id }) => (
        <div key={id}>
          <div>
            <h3> {price} </h3>
          </div>
          <img src={image} alt={title} />
          <div>
            <h2> {title} </h2>
          </div>
        </div>
      ))} */}
    </div>
  );
};
export default ProductList;
