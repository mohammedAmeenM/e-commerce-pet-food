import React from 'react'
import SideBar from './SideBar'
import { Button, Form } from 'react-bootstrap'

const AdminAddProducts = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div style={{ flex: 1, textAlign: 'center', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 >Add products</h1><br />
        <Form style={{width:"500px"}} > 
      <Form.Group> 
          <Form.Label>Edit Img src:</Form.Label> 
          <Form.Control type="text" 
                        name='Image'
                        placeholder='eg:https://a45fd48de1256.jpg'
                       
                      
                       /> 
        </Form.Group> 
        <Form.Group> 
          <Form.Label>Edit product name:</Form.Label> 
          <Form.Control type="text" 
                        name='ProductName'
                        placeholder='Product name'
                     
                         /> 
        </Form.Group> 
        <Form.Group> 
          <Form.Label>Edit price:</Form.Label> 
          <Form.Control type="text" name='Price'  placeholder='Price'/> 
        </Form.Group> 
        <Form.Group> 
          <Form.Label>Edit Animal:</Form.Label> 
          <Form.Control type="text" name='Aminal' placeholder='Dog or Cat' /> 
        </Form.Group> 
        <Form.Group> 
          <Form.Label>Edit Qty:</Form.Label> 
          <Form.Control type="text" name='Qty' placeholder='Quandity'/> 
        </Form.Group> 
        <Button className='mt-3' type='submit' variant="primary"  > 
           Save
        </Button> 
      </Form> 
    
      </div>
      </div>
    </div>
  )
}

export default AdminAddProducts
