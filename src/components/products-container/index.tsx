import IProduct from '../../commons/types/Products';
import Product from '../product';
import Breadcrumbs from '../breadcrumbs';
import Card from '../card';
import styles from './styles.module.scss';

type Props = {
  products: IProduct[];
  categories: string[];
};

const ProductsContainer = (props: Props) => {
  const { products, categories } = props;

  return (
    <>
      <Breadcrumbs items={categories} />
      <div className={styles.containerProducts}>
        <Card>
          {products &&
            products.map((item, idx) => <Product key={item.id} product={item} position={idx} />)}
        </Card>
      </div>
    </>
  );
};

export default ProductsContainer;
