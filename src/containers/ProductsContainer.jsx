import React from 'react';
import { addToCart } from '../actions';
import ProductItem from '../components/ProductItem';
import ProductsList from '../components/ProductsList';
import { useSelector, useDispatch } from 'react-redux';
import _product from 'api/products.json';

const ProductsContainer = () => {
  const products = _product;
  const dispatch = useDispatch();
  return (
    <ProductsList title="Products">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => dispatch(addToCart(product.id))}
        />
      ))}
    </ProductsList>
  );
};

export default ProductsContainer;
