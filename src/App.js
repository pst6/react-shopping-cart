//Feature 1
import React, { Component } from 'react'
import data from './data.json'
import Products from "./components/Products"
import Filter from "./components/Filter"
import Cart from "./components/Cart"
import { Provider } from 'react-redux'
import store from './store'




class App extends Component {
  constructor(){
    super()
    this.state={
      cartItems:(JSON.parse(localStorage.getItem("cart")))?JSON.parse(localStorage.getItem("cart")):[],
      products:data.products,
      size:"",
      sort:"",
      
    }
    //this.filterProducts=this.filterProducts.bind(this)
  }
  
  
  removeFromCart=(product)=>{
    const cartItems=this.state.cartItems.slice()    
    this.setState({
        cartItems:cartItems.filter((x)=>(x._id!==product._id))
    })
    localStorage.setItem("cart",JSON.stringify(cartItems.filter((x)=>(x._id!==product._id))))
  }

  addToCart=(product)=>{
    const cartItems=this.state.cartItems.slice()
    let alreadyInCart=false
    cartItems.forEach((item) =>{
        if(product._id===item._id ){
            item.count++
            item.alreadyInCart=true
            alreadyInCart=true
        }
        
    })
    if(!alreadyInCart){
        cartItems.push({
            ...product,
            alreadyInCart:true,
            count:1
        })
    }
    this.setState({        
        cartItems:cartItems
    })    
    localStorage.setItem("cart",JSON.stringify(cartItems))
    
  }
  

    createOrder=(order)=>{
    alert("Save the Order named "+order.name)
    
    }

  render(){
  return (
    <Provider store={store}>
   <div className='grid-container'>
     <header>
      <a href='/'>React Shopping Cart</a>
     </header>
     <main>
      <div className="content">
        <div className="main">
           <Filter />
           
            <Products addToCart={this.addToCart}/>
            
        </div>
        <div className="sidebar">
            
          <Cart cartItems={this.state.cartItems } removeFromCart={this.removeFromCart} createOrder={this.createOrder}/>
          
        </div>
      </div>
     </main>
     
     <footer>
      All Rights Reserved.
     </footer>
   </div>
   </Provider>
  );
}
}

export default App;
