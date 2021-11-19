import React from 'react';
import PropTypes from 'prop-types';

const ProductsList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
);

export default ProductsList;
