import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadData } from '../store/actions/ActionCreator';
import {
  addToCart,
  updateCartQuantity,
  removeFormCart,
  clearCart,
} from '../store/actions/CartActionCreator';
import { DataTypes } from '../store/types/type';
import Shop from './Shop';

const mapStateProps = (state) => ({
  state,
});

const mapDispatchToProps = {
  loadData,
  addToCart,
  updateCartQuantity,
  removeFormCart,
  clearCart,
};

const filterProducts = (products = [], category) => {
  if (!category || category === 'All') {
    return products;
  } else {
    return products.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }
};

class ShopConnector extends Component {
  render() {
    return (
      <Switch>
        <Route
          path='/shop/products/:category?'
          render={(routeProps) => (
            <Shop
              {...this.props}
              {...routeProps}
              categories={this.props.state.shop.categories}
              products={filterProducts(
                this.props.state.shop.products,
                routeProps.match.params.category
              )}
            />
          )}
        ></Route>
        <Redirect to='shop/products'></Redirect>
      </Switch>
    );
  }

  componentDidMount() {
    this.props.loadData(DataTypes.CATEGORIES);
    this.props.loadData(DataTypes.PRODUCTS);
  }
}

export default connect(mapStateProps, mapDispatchToProps)(ShopConnector);
