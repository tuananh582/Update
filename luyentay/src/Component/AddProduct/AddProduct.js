import { useState } from "react";
const AddProduct = (props) => {
    const [Productvalue,setProduce]=  useState({
        ProductName:"",
        ProductImage:"",
        ProductPrice:"",
    });

    const OnProductChange=(e)=>{
        const {value,name}=e.target;
        
        // console.log({value,name});
        // [name]=value
       
        setProduce({
            ...Productvalue,
            [name]:value,
        })
    }


//   const OnProductNameChange=(e)=>{
//     // console.log("user typing", e.target.value);
//     setProduce({
//         ...Productvalue,
//         ProductName:e.target.value,

//     });
//   }





//   const OnProductImageChange=(e)=>{
//     setProduce({
//         ...Productvalue,
//         ProductImage:e.target.value,


//     });

// }
// const OnProductPriceChange=(e)=>{
//     setProduce({
//         ...Productvalue,
//         ProductPrice:e.target.value,

//     })
// }
const OnProductSubmit =(e)=>{
    e.preventDefault();
    // console.log("im submiting")
    props.OnAddNewProduct(Productvalue);   
    setProduce({
        ProductName:"",
        ProductImage:"",
        ProductPrice:"",

    })

} 

    return (
        <div>
            <div className="mt-3">
            <h5>Add New Product </h5>
            <form onSubmit={OnProductSubmit}>

                <div className="mb-3">
                    <label htmlFor="ProductName" className="form-label">Product Name</label>
                    <input    className="form-control" id="ProductName" placeholder="Typing The Product Name"  value={Productvalue.ProductName} onChange={OnProductChange} name="ProductName" />
                </div>

                <div className="mb-3">
                    <label htmlFor="ProductImage" className="form-label">Product Image (url)</label>
                    <input    className="form-control" id="ProductImage" placeholder="Typing The Product Image" value={Productvalue.ProductImage} onChange={OnProductChange} name="ProductImage" />
                </div>  
                <div className="mb-3">
                    <label htmlFor="ProductPrice" className="form-label">Product Price</label>
                    <input    className="form-control" id="ProductPrice" placeholder="Typing The Product Price" type="number" value={Productvalue.ProductPrice} onChange={OnProductChange} name="ProductPrice" />
                </div>
                <button  className=" mt-3 btn btn-primary" type="submit">Add New Product</button>

            </form>
            </div>


        </div>
    )
}
export default AddProduct; 
