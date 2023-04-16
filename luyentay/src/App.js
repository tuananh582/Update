import { useState } from 'react';
import './App.css';
import AddProduct from './Component/AddProduct/AddProduct';
import Header from "./Component/Header/Header"
function App() {
const [products,setproducts] = useState([])
const OnAddNewProduct = (product) =>{
  const newProductList = [...products,product]
  console.log("Product is coming... ",product)
  setproducts(newProductList);
}



  return (
    <div className="App">
      <Header/>
    <main className="container">
      <div className="row">
      <div className="col-12 col-md-4">
        <AddProduct OnAddNewProduct= {OnAddNewProduct} />
      </div>
      </div>
    </main>
    </div>
  );
}

export default App;
