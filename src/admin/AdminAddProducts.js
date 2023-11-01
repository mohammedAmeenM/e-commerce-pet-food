import React, { useContext, useState } from 'react'
import SideBar from './SideBar'
import { Button, Form } from 'react-bootstrap'
import { UserLogin } from '../App'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AdminAddProducts = () => {
  const navigate=useNavigate()
  const {product,setProduct}=useContext(UserLogin)
  const [newProduct,setNewProduct]=useState({
    ProductName:'',  
    Image:'',
    Price:'',
    Animal:''
  })
  const [newId,setNewId]=useState(0)  
  product.forEach((item) => {
    if (item.Id > newId) {
      setNewId(item.Id);
    }
  });
  const AddId=newId+1
  const handleChange=(e)=>{
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  const handileAdd=(e)=>{
    e.preventDefault();
    if(!newProduct.Image||!newProduct.ProductName||!newProduct.Price||!newProduct.Animal){
      toast.error('fill')
    }
    const newProductList={
      Id:AddId,
      Image:newProduct.Image,
      ProductName: newProduct.ProductName,
      Price: newProduct.Price,
      Animal: newProduct.Animal,
    }
    console.log(newProductList);

    setProduct([...product,newProductList])
    navigate('/adminproduct')

  }
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div style={{ flex: 1, textAlign: 'center', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 >Add products</h1><br />
        <Form style={{width:"500px"}} > 
      <Form.Group> 
          <Form.Label>Add Img src:</Form.Label> 
          <Form.Control type="text" 
                        name='Image'
                        placeholder='eg:https://a45fd48de1256.jpg'
                        value={newProduct.Image}
                        onChange={handleChange}
                        required

                       
                      
                       /> 
        </Form.Group> 
        <Form.Group> 
          <Form.Label>Add product name:</Form.Label> 
          <Form.Control type="text" 
                        name='ProductName'
                        placeholder='ProductName'
                        value={newProduct.ProductName}
                        onChange={handleChange}
                        required
                     
                         /> 
        </Form.Group> 
        <Form.Group> 
          <Form.Label>Add price:</Form.Label> 
          <Form.Control type="text" name='Price'  placeholder='Price' value={newProduct.Price} onChange={handleChange} required/> 
        </Form.Group> 
        <Form.Group> 

          <Form.Label>Add Animal:</Form.Label> 
          <Form.Control type="text" name='Animal' placeholder='Dog or Cat' value={newProduct.Animal} onChange={handleChange} required/> 
        </Form.Group> 
        {/* <Form.Group> 
          <Form.Label>Edit Qty:</Form.Label> 
          <Form.Control type="text" name='Qty' placeholder='Quandity'/> 
        </Form.Group>  */}
        <Button className='mt-3' type='submit' variant="primary" onClick={handileAdd} > 
           Save
        </Button> 
      </Form> 
    
      </div>
      </div>
    </div>
  )
}

export default AdminAddProducts
