import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { removefromWishlist } from '../redux/slices/wishlist';
import { addtocart } from '../redux/slices/cartsliice';
import Header from '../components/Header';

function Wishlist() {
  const wishlist=useSelector(state=>state.wishlistReducer)
  const dispatch=useDispatch()
// console.log(wishlist);

const hadleremoveWishlist=(product)=>{
  dispatch(removefromWishlist(product.id))
  dispatch(addtocart(product))
}

  return (
    <>
        <Header/>

      <div style={{paddingTop:"100px"}}>
        <div className='container'>
          <Row>
            {wishlist?.length>0?wishlist?.map(product=>(
                <Col style={{marginBottom:'10px'}} sm={12} md={6} lg={4} xl={3}>
                <Card  className='card shadow' style={{ width: '18rem' }}>
              <Card.Img  height={'200px'} variant="top" src={product.thumbnail} />
              <Card.Body>
                <Card.Title>{product?.title.slice(0,20)}..</Card.Title>
                <div className='d-flex justify-contnet-between'>
                  <button   onClick={()=>dispatch(removefromWishlist(product?.id))}  className='btn btn-link'><i className='fa-solid fa-heart-circle-minus'></i></button>
                  <button   onClick={()=>hadleremoveWishlist(product)} className='btn btn-link'><i className='fa-solid fa-cart-plus text-warning'></i></button>
  
                </div>
              </Card.Body>
            </Card>
                </Col>)):
            
            <div className='align-items-center d-flex flex-column mb-2' > 
                   
                   <img  width={'200px'}  height={'200px'} src="https://i.postimg.cc/85CZcm30/shopping-cart-removebg-preview.png" alt="" />
              
              <h3 className='font-weight-bold mt-3'>Your Wish List is Empty</h3>
  
              </div>
             
            }
          </Row>
        </div>
      </div>
    </>
   
  )
        }
  


export default Wishlist