import Product from '../../commons/types/Products';
import Header from '../../components/header';
import ProductsContainer from '../../components/products-container';
import useProducts from './use-products';

const Products = () => {
  const products: Product[] = useProducts();

  return (
    <>
      <Header />
      <ProductsContainer products={products} />
    </>
  );
};

export default Products;
