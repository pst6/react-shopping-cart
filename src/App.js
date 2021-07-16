//Feature 1
import React, { Component } from 'react'
import data from './data.json'
import Products from "./components/Products"
import Filter from "./components/Filter"


class App extends Component {
  constructor(){
    super()
    this.state={
      products:data.products,
      size:"",
      sort:""
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
    })
    

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
            <Products productsList={this.state.products}/>
        </div>
        <div className="sidebar">
          Cart items
        </div>
      </div>
     </main>
     <footer>
      All Rights Reserved
     </footer>
   </div>
  );
}
}

export default App;
