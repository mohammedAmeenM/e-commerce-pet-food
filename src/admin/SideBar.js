import React from 'react'

const SideBar = () => {
  return (
    <div>
       <nav id="sidebar" className="bg-light">
      <div className="list-group">
        <a href="/" className="list-group-item list-group-item-action">
          Dashboard
        </a>
        <a href="/users" className="list-group-item list-group-item-action">
          Users
        </a>
        <a href="/products" className="list-group-item list-group-item-action">
          Products
        </a>
        <a href="/settings" className="list-group-item list-group-item-action">
          Settings
        </a>
      </div>
    </nav>
    </div>
  )
}

export default SideBar
