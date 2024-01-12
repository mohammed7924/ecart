import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addtoWishlist } from '../redux/slices/wishlist';
import { addtocart } from '../redux/slices/cartsliice';
import Header from '../components/Header';

function View() {
  const {id}=useParams()
  //to get the parameter
  console.log(id);
  const wishlist=useSelector(state=>state. wishlistReducer)
  const dispatch=useDispatch()
  const [product,setProduct]=useState({})
  useEffect(()=>{
    const allproducts=JSON.parse(sessionStorage.getItem("allproducts"))
    setProduct(allproducts?.find(item=>item.id==id))
  },[])
  console.log(product);
  // console.log(wishlist);

  const handleWishlist=(product)=>{
    const existingProduct=wishlist?.find(item=>item.id==product.id)
    if(existingProduct){
      alert("this product is already in your Wish List")
    }
    else{
      dispatch(addtoWishlist(product))
      
    }
  }
  return (
    <>
        <Header/>

      <div  className='w-100' style={{paddingTop:'100px'}}>
       <div className='container mt-3 mb-5'>
        <div className='row align-items-center'>
          <div className='col-lg-4'>
            <img  height={'300px'} className='img-fluid' src={product?.thumbnail} alt="" />
          </div>
          <div className='col-lg-2'></div>
          <div className='col-lg-6'>
            <span>PID:{product?.id}</span>
            <h1>{product?.title}</h1>
            <h5 className='fw-bold text-danger'>${product?.price}</h5>
            <p className='fw-bold text-primary'><span className='fw-bold text-primary '>Description</span>: {product?.description
  }</p>
  <div className='d-flex justify-content-between mt-5'>
    <button onClick={()=>handleWishlist(product)}  style={{borderRadius:'100px'}} className='btn btn-outline-primary'> <i class="fa-solid fa-heart text-danger"></i>Add to Wish List</button>
    <button    onClick={()=>dispatch(addtocart(product))} style={{borderRadius:'100px'}} className='btn btn-outline-primary '> <i className='fa-solid fa-cart-plus text-warning'></i>Add to Cart</button>
  
  </div>
          </div>
        </div>
       </div>
       
      </div>
    </>
   
  )
}

export default View