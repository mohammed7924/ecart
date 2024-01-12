import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { serchByproduct } from '../redux/slices/productsSlice';
function Header({ insideHome }) {
  const dispatch=useDispatch()

  //inside home to access an element in a unique page
  const wishlist = useSelector(state => state.wishlistReducer)
  const cart = useSelector(state => state.cartReducer)
  // const[wishlistCount,setwishlistCount]=useState(0)

  // useEffect(()=>{
  //   setwishlistCount(wishlist?.length)
  // },[wishlist])



  return (
    <Navbar style={{ zIndex: 2 }} expand="lg" className="bg-primary w-100 position-fixed top-0">
      <Container>
          <Navbar.Brand>        <Link to={'/'} style={{ textDecoration: "none", color: 'white' }} className='fw-bolder  '><i class="fa-solid fa-truck me-2"></i>Daily Cart        </Link>

</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {insideHome && <NavLink><input  onChange={e=>dispatch(serchByproduct(e.target.value.toLowerCase()))} style={{ width: '300px' }} type="text" className=' rounded p-1 ' placeholder='Search Product Here..!' /></NavLink>
            }            <Nav.Link ><Link to={'/wishlist'} style={{ textDecoration: "none", color: 'white' }} > <i className='fa-solid fa-heart text-danger'></i> Wish List  <Badge className='bg-dark'> {wishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link ><Link to={'/cart'} style={{ textDecoration: "none", color: 'white' }} > <i className='fa-solid fa-cart-plus text-warning'></i> Cart  <Badge className='bg-dark'> {cart.length}</Badge></Link></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header