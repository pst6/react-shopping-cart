import React, { Component } from 'react'

class Cart extends Component {
    render() {
        return (
            <div>
                {this.props.cartItems.length}
            </div>
        )
    }
}

export default Cart
