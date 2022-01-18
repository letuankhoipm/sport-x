import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CartSummary extends Component {
  getSummary = (cart) => {
    if (cart.cartItems > 0) {
      return (
        <span>
          {cart.cartItems} item(s) ${cart.cartPrice.toFixed(2)}
        </span>
      );
    } else {
      return <span>Your cart: (Empty)</span>;
    }
  };

  getLinkClasses = (cart) => {
    return `btn btn-sm bg-dark text-white ${
      cart.cartItems === 0 ? 'disable' : ''
    }`;
  };

  render() {
    const { cart } = this.props.state;
    return (
      <div className='float-right'>
        <small>
          {this.getSummary(cart)}
          <Link className={this.getLinkClasses(cart)} to='/shop/cart'>
            <i className='fa fa-shopping-cart'></i>
          </Link>
        </small>
      </div>
    );
  }
}
