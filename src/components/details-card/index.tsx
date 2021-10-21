import { useCategories } from '../../commons/hooks/use-categories';
import IProduct from '../../commons/types/Products';
import Breadcrumbs from '../breadcrumbs';
import BuyButton from '../buy-button';
import Card from '../card';
import Loading from '../loading';
import styles from './styles.module.scss';

type Props = {
  product?: IProduct;
  loading?: boolean;
};

function DetailsCard(props: Props) {
  const { product, loading } = props;
  const { categories } = useCategories();

  return (
    <div className={styles.wrapper}>
      {loading && <Loading />}
      {!loading && (
        <div className={styles.detailsWrapper}>
          {categories && <Breadcrumbs items={categories} />}
          <Card>
            <div className={styles.productDetail}>
              <div className={styles.thumb}>
                <img src={product?.picture} alt="" />
              </div>
              <div className={styles.productData}>
                <p>Novo - 300 vendidos</p>
                <h1>{product?.title}</h1>
                <h2>$ {product?.price.amount}</h2>
                <BuyButton />
              </div>
              <div className={styles.productDescription}>
                <h1>Descripción del producto</h1>
                <p>{product?.description}</p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

DetailsCard.defaultProps = {
  product: {},
  loading: true,
};

export default DetailsCard;
