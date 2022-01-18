import React, { Component } from 'react';

export class ProductList extends Component {
  render() {
    console.log(this.props);
    if (this.props.products == null || this.props.products.length === 0) {
      return <h5 className='p-2'>No Products</h5>;
    }
    return this.props.products.map((prod) => (
      <div key={prod.id}>
        <div className='card m-1 p-1 bg-light' key={prod.id}>
          <h4>
            {prod.name}
            <span className='badge badge-pill badge-primary float-right'>
              ${prod.price.toFixed(2)}
            </span>
          </h4>
          <div className='card-text bg-white p-1'>
            {prod.description}
            <button
              className='btn btn-success btn-sm float-right'
              onClick={() => this.props.addToCart(prod)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ));
  }
}
