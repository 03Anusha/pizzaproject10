import React from 'react';
import "../App.css";

function Navbar() {
  return (
   <div className="Navbar">
       <div className='leftside'>
           <div className='links'>
           <a href="/home">Home</a>
           <a href="/about">About Us</a>
           <a href="/add cart">Add Cart</a>
       </div>
       </div>
  </div>
  )
}

export default Navbar;
