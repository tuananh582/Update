import React from 'react'

const ProductItem = (props) => {
    const {ProductImage,ProductName,ProductPrice,OnAddProductToCart,ProductId}=props
    return (
        <div>
         
            <div className="card col-12 col-md-6 col-lg-4   " >
                <img src={ProductImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{ProductName}</h5>
                    <h5 className="card-title">{ProductPrice}</h5>

                    <a onClick={()=>OnAddProductToCart(ProductId)}  className="btn btn-primary">ADD TO CART</a>

               
                </div>

            </div>
        </div>
    )
}

export default ProductItem
