//Feature 1
import React, { Component } from 'react'
import data from './data.json'
import Products from "./components/Products"

class App extends Component {
  constructor(){
    super()
    this.state={
      products:data.products,
      size:"",
      sort:""
    }
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
