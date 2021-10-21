import IProduct from '../../commons/types/Products';
import Product from '../product';
import Breadcrumbs from '../breadcrumbs';
import Card from '../card';
import styles from './styles.module.scss';

type Props = {
  products: IProduct[];
};

const ProductsContainer = (props: Props) => {
  const { products } = props;

  return (
    <div className={styles.container}>
      <Breadcrumbs items={['tal', 'coisa']} />
      <div className={styles.containerProducts}>
        <Card>{products && products.map((item) => <Product key={item.id} product={item} />)}</Card>
      </div>
    </div>
  );
};

export default ProductsContainer;
