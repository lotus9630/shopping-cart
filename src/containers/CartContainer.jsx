import React from 'react';
import { checkout } from '../actions';
import { getTotal, getCartProducts } from '../reducers';
import Cart from '../components/Cart';
import { useSelector, useDispatch } from 'react-redux';

const CartContainer = () => {
  const products = {}; // = useSelector((state) => getCartProducts(state));
  const total = 0; // = useSelector((state) => getTotal(state));
  const dispatch = useDispatch();
  return (
    <Cart
      products={products}
      total={total}
      onCheckoutClicked={() => dispatch(checkout(products))}
    />
  );
};

export default CartContainer;
