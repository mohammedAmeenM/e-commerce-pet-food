import React from 'react'
import SideBar from './SideBar'

const AdminAddProducts = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div style={{ flex: 1, textAlign: 'center', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 >Add products</h1>
      </div>
      </div>
    </div>
  )
}

export default AdminAddProducts
