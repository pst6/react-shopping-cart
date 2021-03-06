import React, { Component } from 'react'
import { connect } from 'react-redux'
import {filterProducts, sortProducts} from "../actions/productActions"

class Filter extends Component {
    
    render() {
        return (
            !(this.props.filteredItems)?(<div>Loading...</div>):(         
            <div className="filterProducts">
                
                <div className="countFilter">                   
                    {this.props.filteredItems.length} Products             
                </div>
                <div className="priceFilter">    
                Order {" "}              
                    <select  value={this.props.sort} onChange={(e)=>this.props.sortProducts(this.props.filteredItems,e.target.value)}>
                    <option value="latest">Latest</option>
                        <option value="lowestToHighest">Lowest To Highest</option>
                        <option value="highestToLowest">Highest To Lowest</option>
                    </select>           
                </div>
                <div className="sortFilter"> 
                Filter  {" "}                
                    <select  value={this.props.size} onChange={(e)=>this.props.filterProducts(this.props.products,e.target.value)}>
                        <option value="">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>           
                </div>
            </div>
        ))
    }
}

export default connect((state)=>({
    size:state.products.size,
    sort:state.products.sort,
    products:state.products.items,
    filteredItems:state.products.filteredItems
}),{filterProducts,sortProducts})(Filter) 
