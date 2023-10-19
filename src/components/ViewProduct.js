import React from 'react'
import { useParams } from 'react-router-dom'
import { Product } from './ProductData'
import { Button, Card, CardBody, CardImg, CardTitle, Container } from 'react-bootstrap'

const ViewProduct = () => {
    const {id}=useParams();
    const filteredProduct=Product.filter((item)=>item.Id===parseInt(id))
  return (
    <>
    <Container className="d-flex justify-content-center align-items-center mt-5" >

    {
        filteredProduct.map((item)=>(
            <div key={item.Id} style={{alignItems:'center'}}>

        <Card  className="shadow p-3 m-2 bg-body-tertiary rounded" style={{ width: '18rem', height: '28rem', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardBody>
          <CardImg style={{ height: '15rem' }} className='p-2' variant="top" src={item.Image} /><br /><br />
          <CardTitle style={{textAlign:'center'}}>{item.ProductName}</CardTitle><br />
          <h6 style={{textAlign:'center'}}>Price:{item.Price}</h6>
        </CardBody>
        <div>
          <Button variant="outline-dark">Add To Cart</Button>
        </div>
      </Card>
    </div>
      ))
    }
    </Container>
    </>
  )
}

export default ViewProduct
