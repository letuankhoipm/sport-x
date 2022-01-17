import React, { Component } from 'react';
import { CategoryNavigation } from '../components/navigation/CategoryNavigation';
import { ProductList } from '../components/product-list/ProductList';

export default class Shop extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 bg-dark text-white'>
            <div className='navbar-brand'>SPORT X</div>
          </div>
          <div className='col-3 p-2'>
            <CategoryNavigation
              categories={this.props.categories}
              baseUrl='/shop/products'
            ></CategoryNavigation>
          </div>
          <div className='col-9 p-2'>
            <ProductList products={this.props.products}></ProductList>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {}
}
