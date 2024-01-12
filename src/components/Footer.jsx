import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
		<footer className='bg-primary w-100 position:fixed '>
        <div class="footer-col">
            <h4 className='h'> <i class="fa-solid fa-truck me-2"></i>Daily Cart</h4>
            <ul>
                <li><p className='text-white me-5  tt'>Designed and buiilt withnall the love in the world by the Luminar team with the help of our contributers.
                <br />code licensed luminar,docs CS BY 3.0
                <br />
                <br />currently   v1.0.0
                </p>
                </li>
                
            </ul>
        </div>
        <div class="footer-col">
            <h4 className='t'>LINKS</h4>
            <ul className='lin me-2'>
<Link to={'/'}>
	                <li ><a   className='text-info' href="#">Home</a></li>
	
</Link>                

<Link to={'/cart'}>
	<li><a className='text-info' href="#">Cart</a></li>
	
</Link>               

<Link to={'/wishlist'}>
	 <li><a className='text-info' href="#">Wishlist</a></li>
	
</Link>            </ul>
        </div>
        <div class="footer-col">
            <h4 className='t'>GUIDES</h4>
            <ul className='text-white lin'>
                <li>React</li>
                <li>React Bootstrap</li>
                <li>Routing</li>
            </ul>
        </div>
        <div class="footer-col">
            <h4 className='t'>CONTACT US</h4>
            <div class="links linkk">
            <Form.Control   className='w-50 bg-light ' placeholder="Email address" />
            <br />
          <Button  className=' bg-info border-primary'><span className='text-primary'>Enter</span></Button>{' '}
          <br />
            <i class="fa-brands fa-instagram text-white  p-3 fs-3"></i>
            <i class="fa-brands fa-twitter text-white ms-1 p-3 fs-3"></i>
            <i class="fa-solid fa-phone text-white ms-1 fs-3 p-3"></i>
			<i class="fa-brands fa-facebook text-white ms-1 fs-3 p-3"></i>
            </div>
        </div>
    </footer>
          
    </div>
  )
}

export default Footer