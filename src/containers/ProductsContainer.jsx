import React from 'react';
import { addToCart } from '../actions';
import { getVisibleProducts } from '../reducers/products';
import ProductItem from '../components/ProductItem';
import ProductsList from '../components/ProductsList';
import { useSelector, useDispatch } from 'react-redux';

const ProductsContainer = () => {
  const products = useSelector((state) => getVisibleProducts(state.products));
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
