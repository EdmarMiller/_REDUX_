import React from 'react';
import ReactDOM from 'react-dom';
import Produtos from './Produtos';
import ShoppingCart from './ShoppingCart';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <div style={{ display: 'flex' }}>
      <Produtos />
      <ShoppingCart />
    </div>
  </Provider>,
  document.getElementById('root')
);
