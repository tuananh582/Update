import React from 'react'
// import {}
import { useState } from 'react';
const AdProduct = (props) => {
    const [ProduceValue, SetProduce] = useState({
        ProductName: "",
        ProductImage: "",
        ProductPrice: "",
    })
    // const [ProductList, SetProductList] = useState([]);
    const OnProductChange = (e) => {
        const { value, name } = e.target
        SetProduce({
            ...ProduceValue,
            [name]: value,
        });
    }

    const onSubmit =(e)=>{
        e.preventDefault();
        // const NewProductList = [...ProductList,ProduceValue];
        // SetProductList(NewProductList)

        props.OnAddNewProduct(ProduceValue)
        SetProduce({
            ProductName: "",
            ProductImage: "",
            ProductPrice: "",
        })

    }

    return (
        <div className="mt-3">
            <h5>Add New Product </h5>
          CART 
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="ProductName" className="form-label">Product Name</label>
                        <input className="form-control" id="ProductName" placeholder="Typing The Product Name" value={ProduceValue.ProductName} onChange={OnProductChange} name='ProductName' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ProductImage" className="form-label">Product Image</label>
                        <input className="form-control" id="ProductImage" placeholder="Typing The Product Image" value={ProduceValue.ProductImage} onChange={OnProductChange} name='ProductImage' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ProductPrice" className="form-label">Product Price</label>
                        <input className="form-control" type='number' id="ProductPrice" placeholder="Typing The Product Price" value={ProduceValue.ProductPrice} onChange={OnProductChange} name='ProductPrice' />
                    </div>
                    <button  className=" mt-3 btn  btn-primary w-100" type="submit">ADD New Product </button>



                </form> 
        </div>
    )
}

export default AdProduct
