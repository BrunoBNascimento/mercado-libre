import { useState } from 'react';
import isEmpty from 'lodash.isempty';
import Header from '../../components/header';
import ProductsContainer from '../../components/products-container';
import useProducts from './use-products';

const Products = () => {
  const [name, setName] = useState<string>();
  const onTypeSearch = (value: string) => {
    setName(value);
  };

  const { items, loading, categories } = useProducts(name);

  return (
    <>
      <Header onTypeSearch={onTypeSearch} />
      {!isEmpty(items) && (
        <ProductsContainer products={items} loading={loading} categories={categories} />
      )}
    </>
  );
};

export default Products;
