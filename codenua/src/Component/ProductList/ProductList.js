import React from 'react'
import ProductItem from '../ProductItem/ProductItem';

const ProductList = (props) => {
    const { Products,OnAddProductToCart } = props;
    // let ProductElement=[];
    // for(let product of Products)
    // {
    //     const {ProductName,ProductPrice,ProductImage}=product
    //     const newProductItem=(
    //         <div className="card col-12 col-md-6 col-lg-4   " >
    //                                 <img src={ProductImage} className="card-img-top" alt="..." />
    //                                 <div className="card-body">
    //                                     <h5 className="card-title">{ProductName}</h5>
    //                                     <h5 className="card-title">{ProductPrice}</h5>
                                        
    //                                     <a href="#" className="btn btn-primary">ADD TO CART</a>
                                    
    //                             </div>

    //                         </div>
    //     );
    //     ProductElement.push(newProductItem)    ;  

    // }



    console.log("Component ProducList : ", Products)
    return (
        <div >
            <h6>Product List</h6>
            <div className="row ">
                {/* {ProductElement} */}
                {
                    Products.map((product) => {
                        const {ProductName,ProductImage,ProductPrice,id}=product;
                        return (
                            <ProductItem
                             ProductName={ProductName}
                             ProductImage={ProductImage}
                              ProductPrice={ProductPrice} 
                              OnAddProductToCart={OnAddProductToCart} 
                              ProductId={id}
                              key={id}/>

                        )


                    })
                }
            </div>
        </div>
    )
}

export default ProductList
