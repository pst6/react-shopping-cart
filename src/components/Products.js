
import React, { Component } from 'react'
import { Fade, Zoom } from 'react-reveal'
import formatCurrency from "./utils"
import Modal from "C:/Users/Priya.Tavarmani/Desktop/REACT-SHOPPING-CART/node_modules/react-modal/";
import { connect } from 'react-redux';
import {fetchProductlist} from "../actions/productActions"


class Products extends Component {
    constructor(){
        super()
        this.state={
            is_product:null,
        }
    }

    componentDidMount(){
        this.props.fetchProductlist();
    }

    openModal=(product)=>{
        this.setState({
            is_product:product
        })
    }
    closeModal=()=>{
        this.setState({
            is_product:null,
        })
    }
    render() {
        return (
            <div>
                <Fade bottom cascade>
                    {!this.props.products?<div>Loading...</div>:
                    <ul className="products">
                    {this.props.products.map((product)=>(
                        
                        <li key={product._id}>
                            <div className="product">
                            
                                <a href={"#"+product._id} 
                                onClick={()=>this.openModal(product)}>
                                    <img src={product.image} alt={product.title}/>
                                    <p>{product.title}</p>
                                </a>
                                <div className="product-price">
                                    <div>{formatCurrency(product.price)}</div>
                                    <button className="button primary" onClick={()=>this.props.addToCart(product)}>Add to cart</button>
                                </div>                              
                                
                            </div>
                            
                        </li>
                        
                        
                    )                    
                    )}                      
                </ul>}
                
                </Fade> 
                {this.state.is_product!==null &&
                                (<Modal isOpen={true}>
                                <div className="closeBtn">
                                    <div><button className="button" onClick={()=>this.closeModal()}>x</button></div>
                                
                                </div>
                                <div className="imageTitle">
                                    
                                    <div><Zoom cascade><img src={this.state.is_product.image} alt={this.state.is_product.title}/></Zoom></div>
                                    <div className="details">
                                        <div><h1>{this.state.is_product.title}</h1></div>    
                                        <div className="description">
                                        <div><h2>Description</h2></div>
                                        <div>{this.state.is_product.description}</div>
                                        </div>
                                        <div>Available Sizes: {" "}
                                            {this.state.is_product.availableSizes.map((item)=>
                                            <span>{" "}
                                            <button className="button">{item}</button></span>)}
                                        </div>
                                        <div className="priceBtn">
                                        <div>{formatCurrency(this.state.is_product.price)}</div>
                                        
                                        <button className="button primary" onClick={()=>this.props.addToCart(this.state.is_product)}>Add to cart</button><div></div></div>
                                    </div>                                    
                                </div>
                                </Modal>)
                            }
                
            </div>
        )
    }
}
export default connect((state)=>({products:state.products.filteredItems}),{fetchProductlist})(Products)