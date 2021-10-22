import { useState } from 'react';
import isEmpty from 'lodash.isempty';
import Header from '../../components/header';
import ProductsContainer from '../../components/products-container';
import useProducts from './use-products';
import styles from './styles.module.scss';
import Loading from '../../components/loading';

const Products = () => {
  const [name, setName] = useState<string>();
  const onTypeSearch = (value: string) => {
    setName(value);
  };

  const { items, loading, categories } = useProducts(name);
  const hideProducts = !isEmpty(items) && !loading;
  return (
    <>
      <Header onTypeSearch={onTypeSearch} />
      <div className={styles.container}>
        {loading && <Loading />}
        {isEmpty(items) && <h1>Ingrese su búsqueda</h1>}
        {hideProducts && <ProductsContainer products={items} categories={categories} />}
      </div>
    </>
  );
};

export default Products;
