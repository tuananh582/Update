import Header from './Component/Header/Header';
import './App.css';
import AdProduct from './Component/AdProduct/AdProduct';
import ProductList from './Component/ProductList/ProductList';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CartModal from './Component/CartModal/CartModal';
const Initals=[
  //DEMO
  {
    id:1,
    ProductName:"IPhone 13 Pro Max",
    ProductPrice:2000,
    ProductImage:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/289670/iPhone-14-plus-thumb-den-600x600.jpg",
  },
  {
    id:2,
    ProductName:"IPhone 14 Pro Max",
    ProductPrice:3000,
    ProductImage:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/228737/iphone-12-do-new-600x600-600x600.jpg",
  },
  {
    id:3,
    ProductName:"IPhone 15 Pro Max",
    ProductPrice:4000,
    ProductImage:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-bac-thumb-600x600.jpg",
  },
]
function App() {
  const [Products,SetProducts]= useState(Initals);
  const OnAddNewProduct = (product)=>{
    // console.log("New Product is comming",product)
    const NewProduct={
      ...product,
      id:uuidv4(),
    }
    const NewProductList=[...Products,NewProduct]

    // const NewProductList=[...Products, product];
    SetProducts(NewProductList);
  }

const [cart,SetCart]=useState([]);
  const OnAddProductToCart=(productid)=>{
    console.log("Add New ProDuct  ",productid)
    const ExsitingProduct=Products.find((product)=>{
      return product.id===productid;
    })
    // const NewCarItem={
    //   ...ExsitingProduct,
    //   quantity:1,
    // }
    // console.log("Click",ExsitingProduct)
    // SetCart([...cart,NewCarItem])
    const IndexofProduct= cart.findIndex(cartitem=>cartitem.id===productid)
    if(IndexofProduct===-1)
    {
      const NewCarItem={
      ...ExsitingProduct,
      quantity:1,
      }
     console.log("Click",ExsitingProduct)
     SetCart([...cart,NewCarItem])
    }
    else{
      const clonecart=[...cart]
      clonecart[IndexofProduct].quantity+=1
      SetCart(clonecart)
    }

  }
  return (
    <div className="App">
      <header>
      <Header cart={cart}/>

      </header>
      <main className="container py-3">
        <div className="row">
    <div className="col-12 col-md-4">
        <AdProduct OnAddNewProduct={OnAddNewProduct}/>
        </div>
        <div className="col-12 col-md-8">
          <ProductList OnAddProductToCart ={OnAddProductToCart}   Products={Products} />
        </div>
        </div>
      </main>
    <CartModal cart={cart}/>
      
    </div>
  );
}

export default App;
