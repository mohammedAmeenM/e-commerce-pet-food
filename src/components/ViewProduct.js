import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, CardBody, CardImg, CardTitle, Container } from 'react-bootstrap'
import { UserLogin } from '../App'
import Navigationbar from './Navigationbar'
import { toast } from 'react-toastify'
const ViewProduct = () => {
  const navigate=useNavigate()
  const {login,cart,setCart,product}=useContext(UserLogin)
    const {id}=useParams();
    const filteredProduct=product.filter((item)=>item.Id===parseInt(id))
    const AddCart=()=>{
      if(login){
        const [newFilter]=filteredProduct;
       const filterCart= cart.filter((item)=>item.Id===newFilter.Id);
       if(filterCart.length>0){
            toast.warning('product already set to cart')
       }
       else{ 
        setCart ([...cart,newFilter]);
       
       toast.success('Successful add to cart')
        
       }
      }
      else{
        toast.warning('Please Login')
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

        <Card  className="shadow p-1 m-2 bg-body-tertiary rounded" style={{ width: '18rem', height: '28rem', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardBody>
          <CardImg style={{ height: '15rem' }} className='p-2' variant="top" src={item.Image} /><br />
          <CardTitle style={{textAlign:'center'}}>{item.ProductName}</CardTitle>
          <h6 style={{textAlign:'center'}}>Price : <del>{item.OldPrice}</del></h6>
          <h6 style={{textAlign:'center'}}>Offer Price : {item.Price}</h6>
          <p style={{textAlign:'center'}}>Animal : {item.Animal}</p>

        </CardBody>
        <div>
        {cart.find((cartItem) => cartItem.Id === item.Id) ? (
                  <Button variant="outline-dark" onClick={()=>navigate('/cart')}>
                    Go To Cart
                  </Button>
                ) : (
                  <Button variant="outline-dark" onClick={AddCart}>
                    Add To Cart
                  </Button>
                )}
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
