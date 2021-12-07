import React from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from 'actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  });
  return (
    <div>
      <h2>Shopping Cart Example</h2>
      <hr />
      <ProductsContainer />
      <hr />
      <CartContainer />
    </div>
  );
};

export default App;
