import React, { Component } from 'react'
import formatCurrency from "./utils"

class Cart extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    // remove=(product)=>{
    //     const items=this.state.cartItems.slice();
        
    // }
    
    render() {
        
      const cartItems=this.props.cartItems;  
      let totalCost=0  
      cartItems.forEach((item)=>(totalCost+=item.price*item.count))
      
      return (
            
            <div className="sidecart">
                <div className="cart-header">
                    {cartItems.length=== 0?(<div>Cart is empty</div>):(<div> You have  {cartItems.length} items in cart.</div>)}
                 </div>
                <div className="cart-main">
                   <ul className="cart-items">
                       {cartItems.map((item)=>(
                           <li key={item._id}>
                               <div className="cart">
                                    <div className="left">
                                        <img src={item.image} alt={item.title}/>                                        
                                    </div>
                                <div className="middle">  
                                    <div>{item.title}</div>  
                                        <div className="right">                       
                                            <div>{formatCurrency(item.price)}</div><div>*</div><div>{item.count}</div>
                                            <button className="button primary" onClick={()=>this.props.removeFromCart(item)}>Remove</button>
                                            
                                        </div>    
                                    </div>
                                </div>
                           </li>
                       ))}

                   </ul>
                </div>
                <div className="cart-footer">
                    <div>Total :</div>
                    <div>{formatCurrency( Number.parseFloat(totalCost).toFixed(1))}</div>
                    <button className="button primary">Proceed</button>
                </div>
                
            </div>
        )
    }
}

export default Cart
