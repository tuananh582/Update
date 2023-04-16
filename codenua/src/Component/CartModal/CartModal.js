import React from 'react'

export const CartModal = (props) => {
    const {cart}=props
  return (
    <div>
        
        <div>
  {/* Button trigger modal */}
  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>
  {/* Modal */}
  <div className="modal fade" id="cart" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
        <table className="table">
  <thead>
    
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Image</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">ToTal</th>
    </tr>
  </thead>
  <tbody>
    {
        cart.map((cartItem,index)=>{
            const { ProductName,ProductImage,ProductPrice,quantity}=cartItem
            return(
                <tr>
      <th scope="row">{index}</th>
      <td>{ProductName}</td>
      <td>
        <img src={ProductImage} alt="Cart Image"  height={"40px"} />
      </td>
      <td>
        <button className="btn btn-primary ">-</button>
       <span className="mx-2">{quantity}</span> 
        <button className="btn btn-primary ">+</button>
      </td>
      <td>{quantity*ProductPrice}</td>
    </tr>
            )
        })
    }
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr> */}
    
  </tbody>
</table>

        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Check out</button>
        </div>
      </div>
    </div>
  </div>
</div>




    </div>
 
 
 
 
 )
}
export default CartModal;
