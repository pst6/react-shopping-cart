//Feature 1
import React, { Component } from 'react'
import data from './data.json'
import Products from "./components/Products"
import Filter from "./components/Filter"
import Cart from "./components/Cart"


// import store from './store'
// import { Provider } from 'react-redux'



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
  filterProducts=(event)=>{
     console.log(event.target.value)
     if(event.target.value===""){
        this.setState({
            
            products:data.products,
            size:"",
            sort:""
        })
     }
     else{
        this.setState({
            ...this.state,
            size: event.target.value,
            products: data.products.filter(
                (product)=>product.availableSizes.indexOf(event.target.value)>=0)
        });
    }
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
  sortProducts=(event)=>{
    console.log(event.target.value)
    const sort=event.target.value;
    // console.log(event.target.getAttribute("pp"))
    this.setState({
        sort:sort,
        products:this.state.products.slice().sort((a,b)=>(
            
                 sort === "lowestToHighest"?
                 ((a.price > b.price)? 1: -1):
                 sort ==="highestToLowest"? 
                 ((a.price < b.price)? 1:-1):
                 ((a._id<b._id)?1:-1 )            
        ))
    })}

    createOrder=(order)=>{
    alert("Save the Order named "+order.name)
    
    }

  render(){
  return (
    
   <div className='grid-container'>
     <header>
      <a href='/'>React Shopping Cart</a>
     </header>
     <main>
      <div className="content">
        <div className="main">
           <Filter count={this.state.products.length}
           size={this.state.size}
           sort={this.state.sort}
           filterProducts={this.filterProducts}
           sortProducts={this.sortProducts}
           />
           
            <Products productsList={this.state.products} addToCart={this.addToCart}/>
            
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
  );
}
}

export default App;
