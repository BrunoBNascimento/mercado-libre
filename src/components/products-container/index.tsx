import IProduct from '../../commons/types/Products';
import Product from '../product';
import Breadcrumbs from '../breadcrumbs';
import Card from '../card';
import styles from './styles.module.scss';
import Loading from '../loading';

type Props = {
  products: IProduct[];
  loading?: boolean;
  categories: string[];
};

const ProductsContainer = (props: Props) => {
  const { products, loading, categories } = props;

  return (
    <div className={styles.container}>
      {loading && <Loading />}
      {!loading && (
        <>
          <Breadcrumbs items={categories} />
          <div className={styles.containerProducts}>
            <Card>
              {products &&
                products.map((item, idx) => (
                  <Product key={item.id} product={item} position={idx} />
                ))}
            </Card>
          </div>
        </>
      )}
    </div>
  );
};

ProductsContainer.defaultProps = {
  loading: true,
};

export default ProductsContainer;
