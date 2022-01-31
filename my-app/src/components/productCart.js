import React from 'react';


class ProductCart extends React.Component {
    constructor() {
      super();
      this.state = {
        products: data.products,
        cartItems: []
      
       };
      }
      removeFromCart = (product) => {
      const cartItems = this.state.cartItems.slice();
      this.setState({ 
        cartItems: cartItems.filter((x) => x._id !== product._id),
      });
    
    
      };
    
      addToCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
      cartItems.forEach((item) => {
        if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
        }

        });
      
        if (!alreadyInCart){
          cartItems.push({ ...product, count: 1 });
        }
        this.setState({cartItems});
      };


  render() {
  return (
    <div className='grid-container'>
      <h1>pizza dunia</h1>
      <main>
       <div className="content">
       <div className="main">
        <Products products={this.state.products} 
        addToCart={this.addToCart}
        ></Products>
   </div>
   <div className="sidebar">
   <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />
     </div>
       </div>
      
    </main>
    
</div>
    
  )
}
}
export default productCart;
