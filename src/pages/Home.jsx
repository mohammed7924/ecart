import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts,navigateToNextpage,navigateToPrevpage } from '../redux/slices/productsSlice'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Home() {
  const dispatch=useDispatch()
  const {allproducts,loading,error,productsperPage,currentpage}=useSelector(state=>state.productReducer)
 const totalpage=Math.ceil(allproducts?.length/productsperPage)
 const lastproductIndex=currentpage * productsperPage
 const firstproductIndex=lastproductIndex-productsperPage
 const visibleproductCard=allproducts?.slice(firstproductIndex,lastproductIndex)
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  const handleprevPage=()=>{
    if(currentpage!=1){
      dispatch(navigateToPrevpage())
    }
  }
  const handlenextPage=()=>{
    if(currentpage!=totalpage){
      dispatch(navigateToNextpage())
    }
  }
  return (
   <>
       <Header insideHome/>

      <div  className='bg-dark ' style={{paddingTop:"100px"}}>
        {
          loading?<div className='mt-5 text-center'> <Spinner className='me-2' animation="border" variant="primary" /> 
          Loading... </div>:
            <Row   className='m-5 ' >
              { allproducts?.length>0?visibleproductCard.map((product,index)=>(
                     
                     <Col  key={index} className='mb-5'   sm={12} md={6} lg={4} xl={3} >
                    
              <Card    className='shadow mydiv ' style={{ width: '18rem', border:'12px'}}>
          <Card.Img  style={{height:'200px'}} variant="top" src={product?.thumbnail} />
          <Card.Body>
            <Card.Title>{product?.title.slice(0,20)}...</Card.Title>
            
    <Link to={`view/${product.id}`}>
              <Button   style={{borderRadius:'40px'}} className='btn-btn text-center ' variant="primary">View More</Button> 
    
    </Link>     

     </Card.Body>
        </Card>
    
              </Col>
              )
              ):





              <div className='fw-bolder text-danger text-center mt-5 mb-5 fs-4'>
               Product Not Found
              </div> 
              }
              
              
             
            </Row>
  

        }
        <div className='d-flex justify-content-center mt-5'>
          <span  onClick={handleprevPage}  style={{cursor:'pointer'}}> <i className='fa-solid fa-backward me-2 text-warning'></i></span>
          <span className='text-white' style={{cursor:'pointer',}}>{currentpage} of {totalpage}</span>
          <span  onClick={handlenextPage} style={{cursor:'pointer'}}><i className='fa-solid fa-forward ms-2 text-warning'></i></span>
        </div>
      </div>
   </>
  
  )
}

export default Home