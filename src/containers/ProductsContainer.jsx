import React from 'react';
import { addToCart } from '../actions';
import ProductItem from '../components/ProductItem';
import ProductsList from '../components/ProductsList';
import { useDispatch } from 'react-redux';
import { useGetProductsArray } from 'hooks';

const ProductsContainer = () => {
  const products = useGetProductsArray();
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
