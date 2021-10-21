import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import IProduct from '../../commons/types/Products';
import styles from './styles.module.scss';

type Props = {
  product: IProduct;
  position: number;
};

const Product = (props: Props) => {
  const {
    product: { id, picture, title, price },
    position,
  } = props;
  const history = useHistory();
  const handleNavigate = useCallback(() => history.push(`/items/${id}`), [id]);

  return (
    <>
      <div
        onClick={handleNavigate}
        onKeyDown={handleNavigate}
        role="link"
        data-testid="product-item"
        className={styles.product}
        tabIndex={position}
      >
        <div className={styles.thumb} data-testid="thumbnail">
          <img src={picture} alt="" />
        </div>
        <div className={styles.data}>
          <h1>$ {price.amount}</h1>
          <h2>{title}</h2>
        </div>
        <div className={styles.shipping}>Capital</div>
      </div>
      <hr className={styles.divider} />
    </>
  );
};

export default Product;
