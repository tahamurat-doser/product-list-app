import Header from "./components/header/Header";
import ProductList from "./components/product-list/ProductList";
import "./App.scss"

import {products, categories} from "./helper/data"


function App() {
  
  return <div className="App">
    <Header categories={categories} text="Product List" />
    <ProductList products={products}/>
   
  </div>;
}

export default App;
