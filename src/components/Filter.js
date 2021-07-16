import React, { Component } from 'react'

class Filter extends Component {
    
    render() {
        return (
            <div className="filterProducts">
                <div className="countFilter">                   
                    {this.props.count} Products             
                </div>
                <div className="priceFilter">    
                Order {" "}              
                    <select  value={this.props.sort} onChange={this.props.sortProducts}>
                    <option value="latest">Latest</option>
                        <option value="lowestToHighest">Lowest To Highest</option>
                        <option value="highestToLowest">Highest To Lowest</option>
                    </select>           
                </div>
                <div className="sortFilter"> 
                Filter  {" "}                
                    <select  value={this.props.size} onChange={this.props.filterProducts}>
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
        )
    }
}

export default Filter
