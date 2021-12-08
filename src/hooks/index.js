import { useSelector } from 'react-redux';

const useGetProductsArray = () => {
  let result = [];
  const products = useSelector((state) => state.products);
  for (let key in products) {
    const value = products[key];
    result.push(value);
  }
  return result;
};

export { useGetProductsArray };
