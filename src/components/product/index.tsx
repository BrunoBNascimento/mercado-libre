import IProduct from '../../commons/types/Products';
import styles from './styles.module.scss';

type Props = {
  product: IProduct;
};

const Product = (props: Props) => {
  const {
    product: { picture, title, price },
  } = props;

  return (
    <>
      <div className={styles.product}>
        <div className={styles.thumb}>
          <img src={picture} alt="" />
        </div>
        <div className={styles.data}>
          <h1>$ {price.amount}</h1>
          <h2>{title}</h2>
        </div>
        <div className={styles.shipping}>test</div>
      </div>
      <hr className={styles.divider} />
    </>
  );
};

export default Product;
