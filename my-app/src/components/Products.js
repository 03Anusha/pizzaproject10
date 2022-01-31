import React, { Component } from 'react'
/*import formatCurrency from '../util'*/

export default class Products extends Component {
 render() {
    return (
         <div>
         <ul className="products">
            {this.props.products.map((product) => (
                <li key={product._id}>
                <div className="product">
                   <a href={"#" + product._id}>
                       <img src={product.image} alt={"product.flavour"}></img>
                       <p> {product.flavour} </p>
          
         </a>
         <div className="product-description">
               <div>
            {(product.description)}
            </div>
            </div>
            <div className='pay'>
         <div className="product-price">
         <div>
            {(product.prize)}
            </div>
            </div>
            </div>
             <div>
        <button onClick = {()=> this.props.addToCart(product)} className="button primary">Add To cart</button>
    </div>
    
    
   </div>
      </li>
     ))}
     </ul>
     </div>
      )
      }
   }