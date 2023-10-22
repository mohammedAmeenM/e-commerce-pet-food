import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Product } from './ProductData'
import { Button, Card, CardBody, CardImg, CardTitle, Container } from 'react-bootstrap'
import { UserLogin } from '../App'
import Navigationbar from './Navigationbar'
const ViewProduct = () => {
  const navigate=useNavigate()
  const {login,cart,setCart}=useContext(UserLogin);
    const {id}=useParams();
    const filteredProduct=Product.filter((item)=>item.Id===parseInt(id))
    const AddCart=()=>{
      if(login){
        const [newFilter]=filteredProduct;
       const filterCart= cart.filter((item)=>item.Id===newFilter.Id);
       if(filterCart.length>0){
          alert('product already set to cart');
       }
       else{
        setCart (prevState => [...prevState, newFilter]);
        alert('Successful add to cart');
       }
      }
      else{
        alert('please login')
        navigate('/login')
      }
    }
  return (
    <div style={{ background: 'rgb(230, 230, 219)'}}>
      <Navigationbar />
  
    <Container className="d-flex justify-content-center align-items-center mt-5" >
      

    {
        filteredProduct.map((item)=>(
            <div key={item.Id} style={{alignItems:'center'}}>

        <Card  className="shadow p-3 m-2 bg-body-tertiary rounded" style={{ width: '18rem', height: '28rem', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardBody>
          <CardImg style={{ height: '15rem' }} className='p-2' variant="top" src={item.Image} /><br />
          <CardTitle style={{textAlign:'center'}}>{item.ProductName}</CardTitle>
          <h6 style={{textAlign:'center'}}>Price : {item.Price}</h6>
          <p style={{textAlign:'center'}}>Animal : {item.Animal}</p>

        </CardBody>
        <div>
          <Button onClick={AddCart} variant="outline-dark">Add To Cart</Button>
        </div>
      </Card>
    </div>
      ))
    }
    </Container>
    </div>
  )
}

export default ViewProduct
