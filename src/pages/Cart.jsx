import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { DecrementQuantity, emptyCart, incrementQuantity, removefromCart } from '../redux/slices/cartsliice'
import Header from '../components/Header'
Header
function Cart() {
  const cart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [totalcartAmount, setcartAmount] = useState(0)
  useEffect(() => {
    if (cart.length > 0) {
      setcartAmount(cart?.map(item => item.totalPrice)?.reduce((p1, p2) => p1 + p2))
    }
    else {
      setcartAmount(0)
    }
  }, [cart])
  const handleChckout = () => {
    alert("order place successfully!!Thank You For shoppimg With us")
    dispatch((emptyCart()))
    navigate('/')
  }


  const handleDecrement = (product) => {
    if (product.quantity == 1) {
      dispatch(removefromCart(product.id))
    }
    else {
      dispatch(DecrementQuantity(product))
    }
  }




  return (

    <>
    {/* <Header/> */}
      <div style={{ paddingTop: "100px" }}>
        {cart?.length > 0 ? <div className='container pt-5'>
          <h3 className='font-weight-bold'>Cart Summary</h3>
          <div className='row'>
            <div className='col-lg-8'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>..</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cart?.map((product, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{product?.title}</td>
                        <td><img width={'60px'} height={'60px'} src={product?.thumbnail} alt="No Image" /></td>
                        <td>
                          <div className='d-flex align-items-center '>
                            <span  onClick={()=>handleDecrement(product)} style={{cursor:'pointer'}} className=' fw-bolder me-2 rounded'>-</span>
                            <input style={{ width: '40px' }} type="text" className='form-control' value={product?.quantity} readOnly />
                            <span   onClick={()=>dispatch(incrementQuantity(product))} style={{cursor:'pointer'}}  className=' fw-bolder ms-1 '>+</span>
  
                          </div>                        
                          </td>
                        <td>${product?.totalPrice}</td>
                        <td><button onClick={() => dispatch(removefromCart(product?.id))} className='btn btn-link'><i className='fa-solid fa-trash text-danger'></i></button></td>
  
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <div className='float-end mb-5'>
                <button onClick={() => dispatch(emptyCart())} style={{ borderRadius: '30px' }} className='btn btn-danger me-3'>Empty Cart</button>
                <Link style={{ borderRadius: '30px' }} to={'/'} className='btn btn-warning'>Shop More</Link>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='shadow border rounded p-4'>
                <h5>Total Products: <span className='fw-bolder text-danger'>{cart?.length}</span></h5>
                <h5>Total Price : <span className='fw-bolder text-danger'>{totalcartAmount}</span></h5>
                <div className='d-grid mt-4'>
                  <button onClick={handleChckout} style={{ borderRadius: '30px' }} className='btn btn-success mt-2'>Check Out</button>
  
                </div>            </div>
            </div>
          </div>
        </div> :
          <div className='align-items-center d-flex flex-column mb-4' >
  
            <img width={'200px'} height={'200px'} src="https://i.postimg.cc/85CZcm30/shopping-cart-removebg-preview.png" alt="" />
  
            <h3 className='mt-3 font-weight-bold'>Your Cart is Empty</h3>
  
          </div>
        }
      </div>
    </>
   
  )
}

export default Cart